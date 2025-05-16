"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { projectionDefs } from "@/lib/projection-defs";

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

export function MapPreview({
  data,
  sourceProjection = "EPSG:4326",
  bounds,
  focusFeature,
  onClearFocus,
  onFeatureClick,
}: MapPreviewProps) {
  const focusedFeatureLayerRef = useRef<any>(null);

  useEffect(() => {
    if (!mapInstance.current || !geoJsonLayerRef.current) return;

    if (!focusFeature) {
      if (focusedFeatureLayerRef.current) {
        mapInstance.current.removeLayer(focusedFeatureLayerRef.current);
        focusedFeatureLayerRef.current = null;
      }
      return;
    }

    try {
      let foundFeature = false;
      geoJsonLayerRef.current.eachLayer((layer: any) => {
        if (
          layer.feature &&
          ((layer.feature.id && layer.feature.id === focusFeature.id) ||
            JSON.stringify(layer.feature.properties) ===
              JSON.stringify(focusFeature.properties))
        ) {
          if (focusedFeatureLayerRef.current) {
            mapInstance.current.removeLayer(focusedFeatureLayerRef.current);
          }

          const highlightStyle = {
            color: "#ffa39e",
            weight: 4,
            opacity: 1,
            fillColor: "#ffa39e",
            fillOpacity: 0.7,
          };

          const featureClone = JSON.parse(JSON.stringify(layer.feature));

          const highlightedLayer = window.L.geoJSON(featureClone, {
            style: () => highlightStyle,
            pointToLayer: (feature, latlng) =>
              window.L.circleMarker(latlng, {
                radius: 8,
                fillColor: "#ffa39e",
                color: "#ffa39e",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8,
              }),
            onEachFeature: (feature, layer) => {
              if (feature.properties) {
                const popupContent = Object.entries(feature.properties)
                  .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
                  .join("<br>");

                layer.bindPopup(popupContent);
              }
            },
          }).addTo(mapInstance.current);

          focusedFeatureLayerRef.current = highlightedLayer;

          const bounds = layer.getBounds
            ? layer.getBounds()
            : mapInstance.current.getBounds();
          mapInstance.current.fitBounds(bounds, {
            padding: [50, 50],
            maxZoom: 18,
          });

          if (layer.getLatLng) {
            layer.openPopup();
          } else if (layer.getBounds) {
            layer.openPopup(layer.getBounds().getCenter());
          }

          foundFeature = true;
        }
      });

      if (!foundFeature) {
        console.warn("Feature not found in the map");
      }
    } catch (error) {
      console.error("Error focusing on feature:", error);
    }
  }, [focusFeature]);

  const { t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInitialized = useRef(false);
  const mapInstance = useRef<any>(null);
  const geoJsonLayerRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleProjectionWarning = (event: any) => {
      setError(event.detail.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    };

    const handleProjectionError = (event: any) => {
      setError(
        `${t("projectionError")}: ${event.detail.projectionCode}. ${t(
          "projectionErrorDesc"
        )}`
      );
    };

    document.addEventListener("projection-warning", handleProjectionWarning);
    document.addEventListener("projection-error", handleProjectionError);

    return () => {
      document.removeEventListener(
        "projection-warning",
        handleProjectionWarning
      );
      document.removeEventListener("projection-error", handleProjectionError);
    };
  }, [t]);

  useEffect(() => {
    if (!mapContainer.current) return;

    const proj4Script = document.createElement("script");
    proj4Script.src = "./libs/proj4.min.js";
    proj4Script.onload = loadLeafletCSS;
    document.head.appendChild(proj4Script);

    function loadLeafletCSS() {
      const linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.href = "./libs/leaflet.css";
      linkEl.onload = loadLeafletJS;
      document.head.appendChild(linkEl);
    }

    function loadLeafletJS() {
      const script = document.createElement("script");
      script.src = "./libs/leaflet.js";
      script.onload = initializeMap;
      document.head.appendChild(script);
    }

    function initializeMap() {
      if (
        !mapContainer.current ||
        !window.L ||
        !window.proj4 ||
        mapInitialized.current
      )
        return;

      console.log("Initializing map with projection support");
      setIsLoading(true);

      try {
        const map = window.L.map(mapContainer.current, {
          maxBoundsViscosity: 1.0,
        }).setView([0, 0], 1);
        mapInstance.current = map;

        // Add a single OpenStreetMap basemap
        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          }
        ).addTo(map);

        // Register projections
        const registerProjections = () => {
          Object.entries(projectionDefs).forEach(([code, def]) => {
            window.proj4.defs(code, def);
          });
        };

        registerProjections();

        // Add scale control
        window.L.control.scale().addTo(map);

        // Add coordinates display
        const coordDisplay = window.L.control({ position: "bottomleft" });
        coordDisplay.onAdd = () => {
          const div = window.L.DomUtil.create(
            "div",
            "leaflet-control-coordinates"
          );
          div.innerHTML = `${t("coordinates")}: `;
          div.style.backgroundColor = "white";
          div.style.padding = "5px";
          div.style.borderRadius = "4px";
          div.style.boxShadow = "0 1px 5px rgba(0,0,0,0.4)";
          div.style.fontSize = "12px";
          return div;
        };
        coordDisplay.addTo(map);

        // Update coordinates on mouse move
        map.on("mousemove", (e) => {
          const coordDiv = document.querySelector(
            ".leaflet-control-coordinates"
          );
          if (coordDiv) {
            coordDiv.innerHTML = `${t("lat")}: ${e.latlng.lat.toFixed(6)}, ${t(
              "lng"
            )}: ${e.latlng.lng.toFixed(6)}`;
          }
        });

        mapInitialized.current = true;

        // If we have data already, add it to the map
        if (data && data.features && data.features.length > 0) {
          addDataToMap(data);
        }
      } catch (err) {
        console.error("Error initializing map:", err);
        setError(
          "Failed to initialize map. Please check the console for details."
        );
        setIsLoading(false);
      }
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      mapInitialized.current = false;
    };
  }, []);

  // Add data to map when it changes
  useEffect(() => {
    if (
      !mapInitialized.current ||
      !mapInstance.current ||
      !data ||
      !data.features
    ) {
      return;
    }

    console.log("datadata", data);

    addDataToMap(data);
  }, [data, bounds, sourceProjection]);

  // Helper function to normalize projection code
  function normalizeProjectionCode(projCode: string): string {
    // Handle URN format: urn:ogc:def:crs:EPSG:6.9:25833
    if (projCode.startsWith("urn:ogc:def:crs:EPSG:")) {
      const parts = projCode.split(":");
      const epsgCode = parts[parts.length - 1];
      return `EPSG:${epsgCode}`;
    }

    // Handle http format: http://www.opengis.net/gml/srs/epsg.xml#25833
    if (projCode.startsWith("http://www.opengis.net/gml/srs/epsg.xml#")) {
      const epsgCode = projCode.split("#").pop();
      return `EPSG:${epsgCode}`;
    }

    // Handle http format: http://www.opengis.net/def/crs/EPSG/0/3035
    if (projCode.startsWith("http://www.opengis.net/def/crs/EPSG/")) {
      const parts = projCode.split("/");
      const epsgCode = parts[parts.length - 1];
      return `EPSG:${epsgCode}`;
    }

    // Already in EPSG:xxxx format
    return projCode;
  }

  function addDataToMap(geoJsonData: any) {
    const map = mapInstance.current;
    if (!map) return;

    console.log("Adding data to map:", geoJsonData);
    console.log("Source projection:", sourceProjection);
    setIsLoading(true);
    setError(null);

    try {
      // Clear any existing GeoJSON layers
      if (geoJsonLayerRef.current) {
        map.removeLayer(geoJsonLayerRef.current);
        geoJsonLayerRef.current = null;
      }

      // Check if we have valid features with geometry
      const validFeatures = geoJsonData.features.filter(
        (f: any) =>
          f.geometry &&
          f.geometry.coordinates &&
          Array.isArray(f.geometry.coordinates) &&
          f.geometry.coordinates.length > 0
      );

      if (validFeatures.length === 0) {
        console.warn("No valid features with geometry found in the data");
        setError(
          "No valid geometry data found. The WFS data does not contain valid spatial features."
        );
        setIsLoading(false);
        return;
      }

      // Create a deep copy of the GeoJSON to avoid modifying the original
      const processedGeoJson = {
        type: "FeatureCollection",
        features: JSON.parse(JSON.stringify(validFeatures)),
      };

      // Always reproject if the source projection is not WGS84
      const normalizedSourceProj = normalizeProjectionCode(sourceProjection);
      if (normalizedSourceProj && normalizedSourceProj !== "EPSG:4326") {
        console.log(
          `Reprojecting data from ${normalizedSourceProj} to EPSG:4326`
        );

        try {
          // Reproject each feature's geometry
          processedGeoJson.features.forEach((feature) => {
            if (feature.geometry) {
              reprojectGeometry(
                feature.geometry,
                normalizedSourceProj,
                "EPSG:4326"
              );
            }
          });

          console.log("Reprojection complete");
        } catch (error) {
          console.error("Error during reprojection:", error);
          setError(
            `Failed to reproject from ${normalizedSourceProj} to EPSG:4326. The data may not display correctly.`
          );
        }
      } else {
        // Check if coordinates look like they might be in a different projection
        // This is a heuristic - if coordinates are very large numbers, they're likely not in WGS84
        let needsReprojection = false;
        let detectedProjection = null;

        // Sample some coordinates to check if they look like WGS84
        const sampleFeature = processedGeoJson.features[0];
        if (sampleFeature && sampleFeature.geometry) {
          const coords = getCoordinateSample(sampleFeature.geometry);
          if (coords) {
            console.log("Sample coordinates:", coords);

            // WGS84 coordinates are typically between -180 and 180 for longitude and -90 and 90 for latitude
            if (Math.abs(coords[0]) > 180 || Math.abs(coords[1]) > 90) {
              needsReprojection = true;

              // Try to guess the projection based on coordinate ranges
              if (
                coords[0] > 3000000 &&
                coords[0] < 4000000 &&
                coords[1] > 5000000 &&
                coords[1] < 6000000
              ) {
                detectedProjection = "EPSG:31467"; // German Gauss-Kruger Zone 3
                console.log("Detected possible EPSG:31467 projection");
              } else if (
                coords[0] > 300000 &&
                coords[0] < 900000 &&
                coords[1] > 5000000 &&
                coords[1] < 6000000
              ) {
                detectedProjection = "EPSG:25832"; // UTM Zone 32N
                console.log("Detected possible EPSG:25832 projection");
              } else if (
                coords[0] > 300000 &&
                coords[0] < 900000 &&
                coords[1] > 5000000 &&
                coords[1] < 6000000
              ) {
                detectedProjection = "EPSG:25833"; // UTM Zone 33N
                console.log("Detected possible EPSG:25833 projection");
              }
            }
          }
        }

        // If we need to reproject and have detected a projection, do it
        if (needsReprojection && detectedProjection) {
          console.log(
            `Auto-detected projection: ${detectedProjection}, reprojecting to EPSG:4326`
          );

          try {
            // Reproject each feature's geometry
            processedGeoJson.features.forEach((feature) => {
              if (feature.geometry) {
                reprojectGeometry(
                  feature.geometry,
                  detectedProjection,
                  "EPSG:4326"
                );
              }
            });
          } catch (error) {
            console.error("Error during auto-reprojection:", error);
            setError(
              `Failed to reproject from detected projection ${detectedProjection}. The data may not display correctly.`
            );
          }
        }
      }

      // Add GeoJSON data to the map
      const geoJsonLayer = window.L.geoJSON(processedGeoJson, {
        style: () => ({
          color: "#4c68c7",
          weight: 2,
          opacity: 1,
          fillColor: "#4c68c7",
          fillOpacity: 0.5,
        }),
        pointToLayer: (feature, latlng) =>
          window.L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#4c68c7",
            color: "#4c68c7",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
          }),
        onEachFeature: (feature, layer) => {
          // Add a popup with feature properties
          if (feature.properties) {
            const popupContent = Object.entries(feature.properties)
              .map(
                ([key, value]) =>
                  `<strong>${key}:</strong><span class="font-light pl-2">${value}</span>`
              )
              .join("<br>");

            layer.bindPopup(popupContent, {
              maxHeight: 300, // Set maximum height for scrollable content
              className: "scrollable-popup", // Add a custom class for styling
            });
          }
        },
      }).addTo(map);

      // Store the layer reference for later removal
      geoJsonLayerRef.current = geoJsonLayer;

      // Add this line after adding the GeoJSON layer in the addDataToMap function
      // Right after: geoJsonLayerRef.current = geoJsonLayer;
      setupMapEventHandlers(map);

      // Fit the map to the data bounds
      try {
        const layerBounds = geoJsonLayer.getBounds();
        if (layerBounds.isValid()) {
          map.fitBounds(layerBounds, {
            padding: [20, 20], // Add some padding around the bounds
            maxZoom: 16, // Limit the zoom level to avoid zooming in too much on small areas
          });

          // Set max bounds to the data extent plus some padding
          const padFactor = 0.2; // 20% padding
          const northEast = layerBounds.getNorthEast();
          const southWest = layerBounds.getSouthWest();
          const latDiff = northEast.lat - southWest.lat;
          const lngDiff = northEast.lng - southWest.lng;

          const maxBounds = [
            [
              southWest.lat - latDiff * padFactor,
              southWest.lng - lngDiff * padFactor,
            ], // Southwest with padding
            [
              northEast.lat + latDiff * padFactor,
              northEast.lng + lngDiff * padFactor,
            ], // Northeast with padding
          ];

          map.setMaxBounds(maxBounds);
        }
      } catch (e) {
        console.error("Error fitting to GeoJSON bounds:", e);
        // Try to calculate bounds manually from features
        try {
          const bbox = [
            Number.POSITIVE_INFINITY,
            Number.POSITIVE_INFINITY,
            Number.NEGATIVE_INFINITY,
            Number.NEGATIVE_INFINITY,
          ]; // [minLng, minLat, maxLng, maxLat]

          processedGeoJson.features.forEach((feature: any) => {
            if (feature.geometry.type === "Point") {
              const [lng, lat] = feature.geometry.coordinates;
              bbox[0] = Math.min(bbox[0], lng);
              bbox[1] = Math.min(bbox[1], lat);
              bbox[2] = Math.max(bbox[2], lng);
              bbox[3] = Math.max(bbox[3], lat);
            }
          });

          if (bbox[0] !== Number.POSITIVE_INFINITY) {
            const bounds = [
              [bbox[1], bbox[0]], // [lat, lng]
              [bbox[3], bbox[2]],
            ];

            map.fitBounds(bounds, {
              padding: [20, 20],
              maxZoom: 16,
            });

            // Add padding to max bounds
            const latDiff = bbox[3] - bbox[1];
            const lngDiff = bbox[2] - bbox[0];
            const padFactor = 0.2;

            const maxBounds = [
              [bbox[1] - latDiff * padFactor, bbox[0] - lngDiff * padFactor],
              [bbox[3] + latDiff * padFactor, bbox[2] + lngDiff * padFactor],
            ];

            map.setMaxBounds(maxBounds);
          }
        } catch (e) {
          console.error("Failed to calculate bounds manually:", e);
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error adding GeoJSON to map:", error);
      setError(
        "Error rendering map data. There was a problem displaying the spatial data."
      );
      setIsLoading(false);
    }
  }

  // Helper function to get a sample coordinate from a geometry
  function getCoordinateSample(geometry: any): number[] | null {
    if (!geometry || !geometry.coordinates) return null;

    if (geometry.type === "Point") {
      return geometry.coordinates;
    } else if (
      geometry.type === "LineString" ||
      geometry.type === "MultiPoint"
    ) {
      return geometry.coordinates[0];
    } else if (
      geometry.type === "Polygon" ||
      geometry.type === "MultiLineString"
    ) {
      return geometry.coordinates[0][0];
    } else if (geometry.type === "MultiPolygon") {
      return geometry.coordinates[0][0][0];
    }
    return null;
  }

  // Helper function to reproject a geometry
  function reprojectGeometry(geometry: any, fromProj: string, toProj: string) {
    if (!geometry || !geometry.coordinates) return;

    try {
      const normalizedFromProj = normalizeProjectionCode(fromProj);
      const normalizedToProj = normalizeProjectionCode(toProj);

      // Make sure both projections are defined
      if (!window.proj4.defs[normalizedFromProj]) {
        console.error(
          `Missing projection definition for ${normalizedFromProj}, cannot reproject`
        );
        return;
      }

      if (!window.proj4.defs[normalizedToProj]) {
        console.error(
          `Missing projection definition for ${normalizedToProj}, cannot reproject`
        );
        return;
      }

      const reprojectCoord = (coord: number[]): number[] => {
        try {
          // Make sure we have at least 2 coordinates
          if (!Array.isArray(coord) || coord.length < 2) {
            console.warn("Invalid coordinate:", coord);
            return coord;
          }

          // Clone the coordinate to avoid modifying the original
          const coordToProject = [coord[0], coord[1]];

          try {
            // Perform the reprojection
            const result = window.proj4(
              normalizedFromProj,
              normalizedToProj,
              coordToProject
            );

            // If the original coordinate had a Z value, preserve it
            if (coord.length > 2) {
              result.push(coord[2]);
            }

            return result;
          } catch (e) {
            console.error(
              `Error reprojecting coordinate ${coord} from ${normalizedFromProj} to ${normalizedToProj}:`,
              e
            );
            return coord;
          }
        } catch (e) {
          console.error("Error in reprojectCoord:", e);
          return coord;
        }
      };

      if (geometry.type === "Point") {
        geometry.coordinates = reprojectCoord(geometry.coordinates);
      } else if (
        geometry.type === "LineString" ||
        geometry.type === "MultiPoint"
      ) {
        geometry.coordinates = geometry.coordinates.map(reprojectCoord);
      } else if (
        geometry.type === "Polygon" ||
        geometry.type === "MultiLineString"
      ) {
        geometry.coordinates = geometry.coordinates.map((ring: number[][]) =>
          ring.map(reprojectCoord)
        );
      } else if (geometry.type === "MultiPolygon") {
        geometry.coordinates = geometry.coordinates.map(
          (polygon: number[][][]) =>
            polygon.map((ring: number[][]) => ring.map(reprojectCoord))
        );
      }
    } catch (error) {
      console.error("Error in reprojectGeometry:", error);
      throw error;
    }
  }

  // Replace the handleClearSelection function with this improved version
  const handleClearSelection = () => {
    if (onClearFocus) {
      onClearFocus();
    }

    // If no callback provided, clear the focused feature layer
    if (focusedFeatureLayerRef.current && mapInstance.current) {
      mapInstance.current.removeLayer(focusedFeatureLayerRef.current);
      focusedFeatureLayerRef.current = null;
    }
  };

  // Define setupMapEventHandlers at component level
  const setupMapEventHandlers = (map: any) => {
    if (!geoJsonLayerRef.current) return;

    // Handle click on features
    geoJsonLayerRef.current.eachLayer((layer: any) => {
      layer.on("click", (e: any) => {
        // Stop event propagation to prevent the map click handler from firing
        window.L.DomEvent.stopPropagation(e);

        // If we have a feature, highlight it
        if (layer.feature) {
          // If we have an onFeatureClick callback, call it
          if (onFeatureClick) {
            onFeatureClick(layer.feature);
          } else {
            // Otherwise handle highlighting internally
            if (focusedFeatureLayerRef.current) {
              map.removeLayer(focusedFeatureLayerRef.current);
              focusedFeatureLayerRef.current = null;
            }

            // Create highlight
            const highlightStyle = {
              color: "#ffa39e",
              weight: 4,
              opacity: 1,
              fillColor: "#ffa39e",
              fillOpacity: 0.7,
            };

            const featureClone = JSON.parse(JSON.stringify(layer.feature));
            const highlightedLayer = window.L.geoJSON(featureClone, {
              style: () => highlightStyle,
              pointToLayer: (feature, latlng) =>
                window.L.circleMarker(latlng, {
                  radius: 8,
                  fillColor: "#ffa39e",
                  color: "#ffa39e",
                  weight: 2,
                  opacity: 1,
                  fillOpacity: 0.8,
                }),
            }).addTo(map);

            focusedFeatureLayerRef.current = highlightedLayer;
          }
        }
      });

      // Handle popup close to remove highlight if needed
      layer.on("popupclose", () => {
        if (focusedFeatureLayerRef.current) {
          map.removeLayer(focusedFeatureLayerRef.current);
          focusedFeatureLayerRef.current = null;
          handleClearSelection();
        }
      });
    });

    // Handle click on map background to clear selection
    map.on("click", () => {
      if (!onFeatureClick && focusedFeatureLayerRef.current) {
        map.removeLayer(focusedFeatureLayerRef.current);
        focusedFeatureLayerRef.current = null;
      }
    });
  };

  return (
    <div
      ref={mapContainer}
      className="h-full w-full relative z-[500]"
      style={{ minHeight: "400px", zIndex: 500 }}
    >
      {/* Clear selection button */}
      {focusFeature && (
        <div className="absolute bottom-4 right-4 z-[1000]">
          <Button
            variant="outline"
            size="sm"
            className="bg-white flex items-center gap-1 shadow-md"
            onClick={handleClearSelection}
          >
            <X className="h-4 w-4" />
            {t("clearSelection")}
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
      <style jsx global>{`
        .scrollable-popup .leaflet-popup-content {
          max-height: 300px;
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 5px;
        }
      `}</style>
    </div>
  );
}

// Add this to make TypeScript happy with the global objects
declare global {
  interface Window {
    L: any;
    proj4: any;
  }
}

export default MapPreview;
