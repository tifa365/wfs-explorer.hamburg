"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { projectionDefs } from "@/lib/projection-defs";
import { useLeafletWithProj4 } from "../hooks/projection-defs";
import { normalizeProjectionCode, reprojectGeometry } from "@/lib/geo-utils";

interface MapPreviewProps {
  data: any;
  sourceProjection?: string;
  bounds?: {
    minx: number;
    miny: number;
    maxx: number;
    maxy: number;
    crs?: string;
  };
  focusFeature?: any;
  onClearFocus?: () => void;
  onFeatureClick?: (feature: any) => void;
}

export default function MapPreview({
  data,
  sourceProjection = "EPSG:4326",
  focusFeature,
  onClearFocus,
  onFeatureClick,
}: MapPreviewProps) {
  const { t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const geoJsonLayerRef = useRef<any>(null);
  const focusedFeatureLayerRef = useRef<any>(null);
  const mapInitialized = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useLeafletWithProj4({
    onReady: () => {
      if (data && !mapInitialized.current) {
        initializeMap(data);
        mapInitialized.current = true;
      }
    },
    projectionDefs,
  });

  useEffect(() => {
    if (data && mapInitialized.current) {
      destroyMap();
      initializeMap(data);
    }
  }, [data]);

  useEffect(() => {
    if (focusFeature && mapInstance.current && geoJsonLayerRef.current) {
      highlightFeature(focusFeature);
    }
  }, [focusFeature]);

  const destroyMap = () => {
    if (mapInstance.current) {
      mapInstance.current.remove();
      mapInstance.current = null;
      geoJsonLayerRef.current = null;
      focusedFeatureLayerRef.current = null;
    }
  };

  const initializeMap = (geoJsonData: any) => {
    if (!mapContainer.current || !window.L || !window.proj4) return;

    setIsLoading(true);

    const map = window.L.map(mapContainer.current).setView([0, 0], 2);
    mapInstance.current = map;

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    map.on("click", () => {
      handleClearSelection();
    });

    window.L.control.scale().addTo(map);

    const validFeatures = geoJsonData.features?.filter(
      (f: any) => f.geometry?.coordinates?.length
    );

    if (!validFeatures || validFeatures.length === 0) {
      setError(t("noValidGeometry"));
      setIsLoading(false);
      return;
    }

    const processedGeoJson = {
      type: "FeatureCollection",
      features: JSON.parse(JSON.stringify(validFeatures)),
    };

    const normalizedProj = normalizeProjectionCode(sourceProjection);
    if (normalizedProj !== "EPSG:4326") {
      processedGeoJson.features.forEach((f) =>
        reprojectGeometry(f.geometry, normalizedProj, "EPSG:4326")
      );
    }

    const layer = window.L.geoJSON(processedGeoJson, {
      style: { color: "#4c68c7", weight: 2 },
      pointToLayer: (f, latlng) =>
        window.L.circleMarker(latlng, {
          radius: 5,
          fillColor: "#4c68c7",
          color: "#4c68c7",
          weight: 1,
          fillOpacity: 0.8,
        }),
      onEachFeature: (feature, layer) => {
        const popup = Object.entries(feature.properties || {})
          .map(([k, v]) => `<strong>${k}:</strong> ${v}`)
          .join("<br>");
        layer.bindPopup(popup);
        layer.on("click", () => {
          onFeatureClick?.(feature);
        });
      },
    }).addTo(map);

    geoJsonLayerRef.current = layer;

    const bounds = layer.getBounds();
    if (bounds?.isValid?.()) {
      map.fitBounds(bounds, { padding: [20, 20], maxZoom: 16 });
    }

    setIsLoading(false);
  };

  const highlightFeature = (feature: any) => {
    const map = mapInstance.current;
    if (!map || !geoJsonLayerRef.current) return;

    geoJsonLayerRef.current.eachLayer((layer: any) => {
      const match =
        layer.feature &&
        (layer.feature.id === feature.id ||
          JSON.stringify(layer.feature.properties) ===
            JSON.stringify(feature.properties));

      if (match) {
        if (
          focusedFeatureLayerRef.current &&
          map.hasLayer(focusedFeatureLayerRef.current)
        ) {
          map.removeLayer(focusedFeatureLayerRef.current);
        }

        const highlighted = window.L.geoJSON(layer.feature, {
          style: {
            color: "#ffa39e",
            weight: 4,
            opacity: 1,
            fillOpacity: 0.7,
          },
        }).addTo(map);

        focusedFeatureLayerRef.current = highlighted;

        const bounds = layer.getBounds?.();
        if (bounds?.isValid?.()) {
          map.fitBounds(bounds, { padding: [50, 50], maxZoom: 18 });

          const popupContent = Object.entries(feature.properties || {})
            .map(([k, v]) => `<strong>${k}:</strong> ${v}`)
            .join("<br>");

          const center = bounds.getCenter?.();

          if (center) {
            const popup = window.L.popup()
              .setLatLng(center)
              .setContent(popupContent)
              .openOn(map);

            // Wait for the popup DOM to be rendered
            setTimeout(() => {
              const closeBtn = document.querySelector(
                ".leaflet-popup-close-button"
              ) as HTMLElement | null;

              if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                  handleClearSelection(); // Only runs when user manually closes
                });
              }
            }, 1000);
          }
        }
      }
    });
  };

  const handleClearSelection = () => {
    if (onClearFocus) onClearFocus();
    const map = mapInstance.current;
    if (
      focusedFeatureLayerRef.current &&
      map?.hasLayer(focusedFeatureLayerRef.current)
    ) {
      map.removeLayer(focusedFeatureLayerRef.current);
      focusedFeatureLayerRef.current = null;
    }
  };

  return (
    <div
      ref={mapContainer}
      className="h-full w-full relative"
      style={{ minHeight: "400px", zIndex: 500 }}
    >
      {focusFeature && (
        <div className="absolute bottom-4 right-4 z-[1000]">
          <Button onClick={handleClearSelection} variant="outline" size="sm">
            <X className="h-4 w-4" /> {t("clearSelection")}
          </Button>
        </div>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-10">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mb-2"></div>
            <p>{t("loadingMap")}</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-10">
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="warning-300 font-medium">{error}</p>
            <p className="text-sm text-gray-600 mt-1">{t("checkConsole")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
