"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  Loader2,
  Info,
  Search,
  Share2,
  Check,
  Map,
  BarChart3,
  Filter,
  Globe,
  FileJson,
  Download,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  AlertTriangle,
  WandSparkles,
} from "lucide-react";
import {
  fetchWfsCapabilities,
  fetchWfsData,
  fetchFeatureCount,
  type LayerInfo,
} from "@/lib/wfs-service";
import { LayerSelector } from "@/components/layer-selector";
import { FeatureCountSelector } from "@/components/feature-count-selector";
import { AttributeExplorer } from "@/components/attribute-explorer";
import { AttributeStats } from "@/components/attribute-stats";
import { AttributeFilter } from "@/components/attribute-filter";
import { DownloadOptions } from "@/components/download-options";
import { DownloadFilteredOptions } from "@/components/download-filtered-options";
import dynamic from "next/dynamic";
import { ExampleDatasets } from "@/components/example-datasets";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Use dynamic import with no SSR for the MapPreview component
const MapPreview = dynamic(() => import("@/components/map-preview"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mb-2"></div>
        <p>loading</p>
      </div>
    </div>
  ),
});

// Change to default export
export default function WfsAnalyzer() {
  const { t } = useLanguage();
  const [wfsUrl, setWfsUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wfsData, setWfsData] = useState<any>(null);
  const [filteredData, setFilteredData] = useState<any>(null);
  const [attributes, setAttributes] = useState<string[]>([]);
  const [selectedAttribute, setSelectedAttribute] = useState<string | null>(
    null
  );
  const [availableLayers, setAvailableLayers] = useState<LayerInfo[]>([]);
  const [selectedLayer, setSelectedLayer] = useState<LayerInfo | null>(null);
  const [isLoadingLayers, setIsLoadingLayers] = useState(false);
  const [maxFeatures, setMaxFeatures] = useState(500);
  const [totalFeatureCount, setTotalFeatureCount] = useState<number | null>(
    null
  );
  const [isLoadingCount, setIsLoadingCount] = useState(false);
  const [activeTab, setActiveTab] = useState("explorer");
  const [hasGeometry, setHasGeometry] = useState(false);
  const [sourceProjection, setSourceProjection] = useState<string>("EPSG:4326");
  const [isFiltered, setIsFiltered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [hasProjectionIssue, setHasProjectionIssue] = useState(false);
  const [analyzedUrl, setAnalyzedUrl] = useState("");
  const [focusedFeature, setFocusedFeature] = useState<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMaxFeaturesUpdating, setIsMaxFeaturesUpdating] = useState(false);
  const [downloadType, setDownloadType] = useState("wgs84");
  const [supportsJsonFormat, setSupportsJsonFormat] = useState(true);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showLayerDetails, setShowLayerDetails] = useState(false);
  const [errorType, setErrorType] = useState<
    "network" | "auth" | "notFound" | "badRequest" | "server" | "unknown" | null
  >(null);
  const [activeFilters, setActiveFilters] = useState<any[]>([]);

  // All hooks must be called before any conditional returns
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const wfsParam = params.get("loadwfs");

      if (wfsParam) {
        console.log("Loading WFS from URL parameter:", wfsParam);
        setWfsUrl(wfsParam);
        setTimeout(() => {
          analyzeWfsUrl(wfsParam);
        }, 0);
      }
    }
  }, []);

  useEffect(() => {
    const handleProjectionError = (event: any) => {
      console.log("Projection error detected:", event.detail);
      setHasProjectionIssue(true);
    };

    document.addEventListener("projection-error", handleProjectionError);

    return () => {
      document.removeEventListener("projection-error", handleProjectionError);
    };
  }, []);

  // Add a new effect to listen for format error events
  useEffect(() => {
    const handleFormatError = (event: any) => {
      console.log("Format error detected:", event.detail);

      // Only set supportsJsonFormat to false if we've actually confirmed JSON isn't supported
      // Not just because it's not listed in metadata
      if (event.detail && event.detail.jsonAttempted === true) {
        setSupportsJsonFormat(false);
      }
    };

    document.addEventListener("format-error", handleFormatError);

    return () => {
      document.removeEventListener("format-error", handleFormatError);
    };
  }, []);

  // Update URL when WFS is selected
  const updateUrlParameter = (url: string) => {
    if (typeof window !== "undefined") {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("loadwfs", url);
      window.history.pushState(
        { path: newUrl.toString() },
        "",
        newUrl.toString()
      );
    }

    if (url === "") {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("loadwfs");
      window.history.pushState(
        { path: newUrl.toString() },
        "",
        newUrl.toString()
      );
    }
  };

  // Copy current URL to clipboard
  const copyUrlToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Determine error type from error message
  const determineErrorType = (
    errorMessage: string
  ): "network" | "auth" | "notFound" | "badRequest" | "server" | "unknown" => {
    if (
      errorMessage.includes("Network Error") ||
      errorMessage.includes("Failed to fetch")
    ) {
      return "network";
    } else if (
      errorMessage.includes("Authentication Error") ||
      errorMessage.includes("401") ||
      errorMessage.includes("403")
    ) {
      return "auth";
    } else if (
      errorMessage.includes("Not Found") ||
      errorMessage.includes("404")
    ) {
      return "notFound";
    } else if (
      errorMessage.includes("Bad Request") ||
      errorMessage.includes("400")
    ) {
      return "badRequest";
    } else if (
      errorMessage.includes("Server Error") ||
      errorMessage.includes("500")
    ) {
      return "server";
    } else {
      return "unknown";
    }
  };

  // Function to analyze a WFS URL
  const analyzeWfsUrl = async (url: string) => {
    if (!url.trim()) {
      setError(t("enterWfsUrl"));
      setErrorType("unknown");
      return;
    }

    // Reset all states
    setError(null);
    setErrorType(null);
    setAnalyzedUrl(url.trim());
    setIsLoadingLayers(true);
    setAvailableLayers([]);
    setSelectedLayer(null);
    setWfsData(null);
    setFilteredData(null);
    setAttributes([]);
    setTotalFeatureCount(null);
    setHasGeometry(false);
    setSourceProjection("EPSG:4326");
    setIsFiltered(false);
    setHasProjectionIssue(false);
    setFocusedFeature(null);
    setSupportsJsonFormat(true);

    // Update URL parameter
    updateUrlParameter(url);

    // Clean up the URL if needed
    let cleanUrl = url.trim();

    // If the URL already has GetCapabilities, extract the base URL
    if (
      cleanUrl.includes("GetCapabilities") ||
      cleanUrl.includes("getcapabilities")
    ) {
      try {
        const urlObj = new URL(cleanUrl);
        // Remove specific WFS parameters to get the base URL
        const params = new URLSearchParams(urlObj.search);
        params.delete("request");
        params.delete("service");
        params.delete("version");

        // Reconstruct the URL without WFS-specific parameters
        const remainingParams = params.toString();
        cleanUrl = `${urlObj.origin}${urlObj.pathname}${
          remainingParams ? `?${remainingParams}` : ""
        }`;
      } catch (e) {
        console.error("Error cleaning URL:", e);
        // Continue with the original URL if there's an error
      }
    }

    try {
      // First, fetch the capabilities to get available layers
      const layers = await fetchWfsCapabilities(cleanUrl);
      setAvailableLayers(layers);

      if (layers.length === 0) {
        setError(t("noLayersFound"));
        setErrorType("notFound");
      } else if (layers.length === 1) {
        // If only one layer, select it automatically
        setSelectedLayer(layers[0]);
        await fetchLayerData(layers[0], cleanUrl);
      }
      // If multiple layers, wait for user selection
    } catch (err) {
      console.error("WFS capabilities error:", err);

      // Clear any layer data when there's an error
      setSelectedLayer(null);
      setAvailableLayers([]);
      setWfsData(null);
      setFilteredData(null);

      // Improved error handling with more specific messages
      if (err instanceof Error) {
        setError(err.message);
        setErrorType(determineErrorType(err.message));
      } else {
        setError(t("unknownError"));
        setErrorType("unknown");
      }
    } finally {
      setIsLoadingLayers(false);
    }
  };

  const handleAnalyze = () => {
    analyzeWfsUrl(wfsUrl);
  };

  // Update the fetchLayerData function to properly pass the URL to fetchLayerDataWithMaxFeatures
  const fetchLayerData = async (layer: LayerInfo, urlOverride?: string) => {
    const urlToUse = urlOverride || wfsUrl;
    await fetchLayerDataWithMaxFeatures(layer, maxFeatures, urlToUse);
  };

  // Update the handleLayerSelect function to ensure it properly fetches layer data
  const handleLayerSelect = async (layer: LayerInfo) => {
    console.log("Layer selected:", layer);
    setSelectedLayer(layer);
    await fetchLayerData(layer);
  };

  const handleMaxFeaturesChange = async (newMaxFeatures: number) => {
    console.log("Max features changed from", maxFeatures, "to", newMaxFeatures);

    // Set the updating flag to true
    setIsMaxFeaturesUpdating(true);

    // Reset states that should be updated with new data
    setWfsData(null);
    setFilteredData(null);
    setFocusedFeature(null);
    setAttributes([]);
    setSelectedAttribute(null);
    setIsFiltered(false);

    // Update the max features state
    setMaxFeatures(newMaxFeatures);

    // Only refetch if we have a selected layer
    if (selectedLayer) {
      try {
        // Pass the new max features value directly to ensure it's used immediately
        await fetchLayerDataWithMaxFeatures(
          selectedLayer,
          newMaxFeatures,
          wfsUrl
        );
      } catch (error) {
        console.error("Error fetching data after max features change:", error);
        setError(t("maxFeaturesUpdateError"));
        setErrorType("unknown");
      } finally {
        setIsMaxFeaturesUpdating(false);
      }
    } else {
      setIsMaxFeaturesUpdating(false); // Reset the flag if no layer is selected
    }
  };

  // Add this new helper function after the handleMaxFeaturesChange function
  // Update the fetchLayerDataWithMaxFeatures function to accept and use the URL parameter
  const fetchLayerDataWithMaxFeatures = async (
    layer: LayerInfo,
    maxFeaturesValue: number,
    urlOverride?: string
  ) => {
    setIsLoading(true);
    setError(null);
    setErrorType(null);
    setHasGeometry(false);
    setIsFiltered(false);
    setHasProjectionIssue(false); // Reset projection issue flag
    setFocusedFeature(null); // Reset focused feature
    setAttributes([]); // Reset attributes
    setSelectedAttribute(null); // Reset selected attribute

    // Use the provided URL override or fall back to the state URL
    const urlToUse = urlOverride || wfsUrl;

    try {
      // First try to get the total feature count
      setIsLoadingCount(true);
      try {
        const count = await fetchFeatureCount(urlToUse, layer.id);
        setTotalFeatureCount(count);
      } catch (countError) {
        console.error("Error fetching feature count:", countError);
        setTotalFeatureCount(null);
      } finally {
        setIsLoadingCount(false);
      }

      // Then fetch the actual data with the provided maxFeatures limit
      // Use the layer's default projection first, then convert to WGS84 if needed
      console.log(`Fetching data with max features: ${maxFeaturesValue}`);
      const {
        data,
        attributes: fetchedAttributes,
        sourceProjection: detectedProjection,
      } = await fetchWfsData(urlToUse, layer.id, maxFeaturesValue, layer);

      setWfsData(data);
      setFilteredData(data); // Initialize filtered data with all data
      setAttributes(fetchedAttributes);
      setSourceProjection(detectedProjection || "EPSG:4326");

      console.log(
        `Data fetched with source projection: ${
          detectedProjection || "EPSG:4326"
        }`
      );
      if (detectedProjection && detectedProjection !== "EPSG:4326") {
        console.log(
          `Data will be reprojected from ${detectedProjection} to EPSG:4326 for display and download`
        );
      }

      // Check if the data has valid geometry
      const hasValidGeometry = data.features.some(
        (f: any) =>
          f.geometry &&
          f.geometry.coordinates &&
          Array.isArray(f.geometry.coordinates) &&
          f.geometry.coordinates.length > 0
      );
      setHasGeometry(hasValidGeometry);

      if (fetchedAttributes.length > 0) {
        setSelectedAttribute(fetchedAttributes[0]);
      }
    } catch (err) {
      console.error("Error fetching WFS data:", err);
      if (err instanceof Error) {
        setError(err.message);
        setErrorType(determineErrorType(err.message));
      } else {
        setError(t("fetchDataError"));
        setErrorType("unknown");
      }
      setWfsData(null);
      setFilteredData(null);
      setAttributes([]);
    } finally {
      setIsLoading(false);
      setIsMaxFeaturesUpdating(false); // Reset the updating flag
    }
  };

  // Handle filter changes
  const handleFilterChange = (newFilteredData: any, filters: any[]) => {
    if (newFilteredData && wfsData) {
      // Add total feature count to the filtered data
      newFilteredData.totalFeatures = wfsData.features.length;
    }

    setFilteredData(newFilteredData);
    setIsFiltered(
      newFilteredData &&
        wfsData &&
        newFilteredData.features.length !== wfsData.features.length
    );
    setActiveFilters(filters);
  };

  // Handle example dataset selection
  const handleSelectExampleDataset = (url: string) => {
    // First set the URL
    setWfsUrl(url);
    // Then analyze the URL
    analyzeWfsUrl(url);
    // Hide examples after selection
    setShowExamples(false);
  };

  // Clear previous data when switching between example datasets
  useEffect(() => {
    if (wfsUrl) {
      // Reset all data states when URL changes
      setWfsData(null);
      setFilteredData(null);
      setAttributes([]);
      setSelectedLayer(null);
      setTotalFeatureCount(null);
      setHasGeometry(false);
      setSourceProjection("EPSG:4326");
      setIsFiltered(false);
      setHasProjectionIssue(false);
      setFocusedFeature(null);
      setError(null);
      setErrorType(null);
    }
  }, [wfsUrl]);

  // Move conditional logic inside the useEffect hook
  useEffect(() => {
    if (hasProjectionIssue) {
      console.log("A projection issue exists.");
    }
  }, [hasProjectionIssue]);

  // Add a handler function for viewing a feature on the map
  const handleViewFeatureOnMap = (feature: any) => {
    setFocusedFeature(feature);

    // Scroll to the map container
    if (mapContainerRef.current) {
      mapContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add a handler to clear the focused feature
  const handleClearFocusedFeature = () => {
    setFocusedFeature(null);
  };

  // Render error message based on error type
  const renderErrorMessage = () => {
    if (!error) return null;

    let icon = <AlertCircle className="h-5 w-5" />;
    let title = t("errorTitle");
    let bgColor = "bg-destructive/5";
    let borderColor = "border-destructive/20";
    let textColor = "text-destructive";

    if (errorType === "badRequest") {
      icon = <AlertTriangle className="h-5 w-5 text-amber-600" />;
      title = t("invalidWfsUrl");
      bgColor = "bg-amber-50";
      borderColor = "border-amber-300";
      textColor = "text-amber-800";
    } else if (errorType === "notFound") {
      icon = <AlertTriangle className="h-5 w-5 text-amber-600" />;
      title = t("wfsServiceNotFound");
      bgColor = "bg-amber-50";
      borderColor = "border-amber-300";
      textColor = "text-amber-800";
    } else if (errorType === "auth") {
      icon = <AlertTriangle className="h-5 w-5 text-amber-600" />;
      title = t("authenticationRequired");
      bgColor = "bg-amber-50";
      borderColor = "border-amber-300";
      textColor = "text-amber-800";
    } else if (errorType === "network") {
      icon = <AlertTriangle className="h-5 w-5 text-amber-600" />;
      title = t("networkError");
      bgColor = "bg-amber-50";
      borderColor = "border-amber-300";
      textColor = "text-amber-800";
    } else if (errorType === "server") {
      icon = <AlertCircle className="h-5 w-5 text-red-600" />;
      title = t("serverError");
      bgColor = "bg-red-50";
      borderColor = "border-red-300";
      textColor = "text-red-800";
    }

    return (
      <Alert className={`mb-6 ${bgColor} border-${borderColor}`}>
        {icon}
        <AlertTitle className={`text-lg ${textColor}`}>{title}</AlertTitle>
        <AlertDescription className="space-y-2">
          <p className={`text-base ${textColor}`}>{error}</p>

          {(errorType === "badRequest" ||
            errorType === "notFound" ||
            errorType === "network") && (
            <div className="mt-4 p-3 bg-white rounded-md border border-amber-200">
              <p className="font-medium text-amber-800">
                {t("troubleshootingSuggestions")}
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-amber-700">
                <li>{t("checkUrlTypos")}</li>
                <li>{t("verifyValidWfs")}</li>
                <li>{t("checkServerOnline")}</li>
                <li>{t("tryAddingWfs")}</li>
                <li>{t("tryExampleDatasets")}</li>
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 border-amber-300 text-amber-800 hover:bg-amber-50"
                onClick={() => setShowExamples(true)}
              >
                {t("showExampleDatasets")}
              </Button>
            </div>
          )}

          {error.includes("CORS") && (
            <div className="bg-destructive/10 p-3 rounded-md text-sm">
              <p className="font-semibold flex items-center gap-1">
                <Info className="h-4 w-4" /> {t("corsIssueDetected")}
              </p>
              <p className="mt-1">{t("corsDescription")}</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>{t("corsOption1")}</li>
                <li>{t("corsOption2")}</li>
                <li>{t("corsOption3")}</li>
              </ul>
            </div>
          )}
        </AlertDescription>
      </Alert>
    );
  };

  // It's important to return something, even if it's null
  return (
    <div className="min-h-screen bg-odis-light-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl">
        {/* Header with logo and language switcher */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            {/* <div className="w-12 h-12 rounded-full bg-[#1a3a8f] flex items-center justify-center mr-3">
              <WandSparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[var(--primary-color)]">
                {t("appTitle")}
              </h1>
              <p className="text-sm text-gray-600">{t("appSubtitle")}</p>
            </div> */}

            <a href="https://odis-berlin.de/" target="_blank">
              <img
                src={"/logo-odis.svg"}
                width="200"
                height="100"
                alt="Odis logo"
              />
            </a>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Main content area with white background */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-lg">
          {/* Description */}
          <div className="mb-10">
            {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4"> */}

            <h1 className="text-3xl font-bold text-odis-dark">
              Geo<span className="text-odis-light">Explorer</span>
              <p className="text-sm pb-2">
                aka WFS-Zard <span className="text-2xl">🧙</span>
              </p>
            </h1>

            {/* </h2> */}
            <p className=" mb-6">{t("toolDescription")}</p>

            {/* Feature overview with icons only by default */}
            <div className="mb-2">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium ">{t("keyFeatures")}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-odis-light  hover:text-odis-dark  hover:bg-[var(--primary-light)] p-2 h-auto flex items-center text-sm"
                    onClick={() => setShowFeatures(!showFeatures)}
                  >
                    {showFeatures ? t("showLess") : t("showMore")}
                  </Button>
                </div>

                {!showFeatures ? (
                  <div className="flex flex-wrap">
                    <div className="flex items-center gap-2 pr-3">
                      <Info className="h-5 w-5 text-odis-light" />
                      <span className="text-sm mt-1">{t("metadataInfo")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2">
                      <Map className="h-5 w-5 text-odis-light" />
                      <span className="text-sm  mt-1">
                        {t("mapVisualization")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2">
                      <BarChart3 className="h-5 w-5 text-odis-light" />
                      <span className="text-sm  mt-1">{t("statistics")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2">
                      <Filter className="h-5 w-5 text-odis-light" />
                      <span className="text-sm  mt-1">{t("filtering")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2">
                      <Globe className="h-5 w-5 text-odis-light" />
                      <span className="text-sm  mt-1">
                        {t("wgs84Conversion")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2">
                      <Download className="h-5 w-5 text-odis-light" />

                      <span className="text-sm mt-1">{t("dataDownload")}</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2">
                        <Info className="h-5 w-5 text-odis-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t("interactiveMetadataInfo")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t("interactiveMetadataInfoDescription")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2">
                        <Map className="h-5 w-5 text-odis-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t("interactiveMapVisualization")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t("interactiveMapDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2">
                        <BarChart3 className="h-5 w-5 text-odis-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t("attributeStatistics")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t("attributeStatisticsDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2">
                        <Filter className="h-5 w-5 text-odis-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t("advancedFiltering")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t("advancedFilteringDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2">
                        <Globe className="h-5 w-5 text-odis-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t("projectionConversion")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t("projectionConversionDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2">
                        <Download className="h-5 w-5 text-odis-light" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t("dataDownload")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t("dataDownloadDescription")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search input */}
            <div className="relative">
              <div className="flex border rounded-lg overflow-hidden">
                <Input
                  id="wfs-url"
                  placeholder={t("wfsUrlPlaceholder")}
                  value={wfsUrl}
                  onChange={(e) => {
                    setWfsUrl(e.target.value);
                    updateUrlParameter("");

                    // If URL changes significantly, clear all previous data
                    if (e.target.value.trim() !== analyzedUrl) {
                      // Clear all data states when URL changes
                      setSelectedLayer(null);
                      setAvailableLayers([]);
                      setWfsData(null);
                      setFilteredData(null);
                      setAttributes([]);
                      setTotalFeatureCount(null);
                      setHasGeometry(false);
                      setSourceProjection("EPSG:4326");
                      setIsFiltered(false);
                      setHasProjectionIssue(false);
                      setFocusedFeature(null);
                      setError(null);
                      setErrorType(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAnalyze();
                    }
                  }}
                  className="py-6 px-4 text-lg border-0 focus-visible:ring-1 focus-visible:ring-[#1a3a8f] focus-visible:ring-offset-0 flex-grow rounded-l-md !rounded-r-none"
                />
                <Button
                  className="h-auto bg-odis-light hover:bg-active hover:!text-odis-dark text-white !rounded-l-none"
                  onClick={handleAnalyze}
                  disabled={
                    isLoadingLayers ||
                    isLoading ||
                    (wfsUrl.trim() === analyzedUrl && analyzedUrl !== "")
                  }
                >
                  {isLoadingLayers ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : wfsUrl.trim() === analyzedUrl &&
                    analyzedUrl !== "" &&
                    !error ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      {t("loaded")}
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      {t("analyzeButton")}
                    </>
                  )}
                </Button>
              </div>

              {wfsData && wfsUrl && !error && (
                <div className="absolute right-0 top-full mt-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={copyUrlToClipboard}
                        >
                          {isCopied ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Share2 className="h-4 w-4" />
                          )}
                          {isCopied ? t("copied") : t("shareWfs")}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {isCopied ? t("copied") : t("shareWfs")}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>

            {/* Example datasets - collapsible */}
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-[var(--primary-color)] hover:opacity-90 hover:bg-[var(--primary-light)] p-2 h-auto flex items-center text-sm"
                onClick={() => setShowExamples(!showExamples)}
              >
                {showExamples ? (
                  <ChevronUp className="h-4 w-4 mr-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 mr-1" />
                )}
                {showExamples
                  ? t("hideExampleDatasets")
                  : t("showExampleDatasets")}
              </Button>

              {showExamples && (
                <div className="mt-2 p-3 bg-[#f0f4ff] rounded-md">
                  <p className="text-sm text-gray-600 mb-2">
                    {t("exampleDatasetsDescription")}
                  </p>
                  <ExampleDatasets
                    onSelectDataset={handleSelectExampleDataset}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Error messages */}
          {renderErrorMessage()}

          {selectedLayer && !supportsJsonFormat && !error && (
            <Alert
              variant="warning"
              className="bg-amber-50 border-amber-200 mb-6"
            >
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">
                {t("jsonFormatNotSupported")}
              </AlertTitle>
              <AlertDescription className="text-amber-700">
                <p>{t("jsonFormatNotSupportedDesc")}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>{t("mapPreviewUnavailable")}</li>
                  <li>{t("dataDownloadUnavailable")}</li>
                  <li>{t("attributeStatisticsUnavailable")}</li>
                </ul>
                <p className="mt-2">{t("limitedFunctionality")}</p>
              </AlertDescription>
            </Alert>
          )}

          {availableLayers.length > 0 && !selectedLayer && !error && (
            <div className="relative z-50 mb-6">
              <LayerSelector
                layers={availableLayers}
                onSelectLayer={handleLayerSelect}
                isLoading={isLoading}
              />
            </div>
          )}

          {/* Only show layer information if there's no error */}
          {selectedLayer && !error ? (
            <div className="space-y-4 mb-6">
              <Card className="bg-odis-extra-light border-odis-light">
                <CardHeader>
                  <CardTitle className="tracking-tight flex items-center text-lg font-medium">
                    <AlertCircle className="h-5 w-5 mr-2 text-[var(--primary-color)]" />
                    {t("currentLayer")}
                  </CardTitle>
                  <CardDescription>
                    {t("mapPreviewDescription")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{t("layer")}</span>
                        <span>{selectedLayer.title || selectedLayer.id}</span>
                        {availableLayers.length > 1 && (
                          <Button
                            variant="link"
                            className="p-0 h-auto ml-2 text-odis-light"
                            onClick={() => setSelectedLayer(null)}
                          >
                            {t("changeLayer")}
                          </Button>
                        )}
                      </div>
                      {selectedLayer.abstract && (
                        <div className="text-sm text-gray-600 mt-1">
                          {selectedLayer.abstract}
                        </div>
                      )}
                    </div>

                    {/* Metadata Information - Always shown without requiring a button click */}
                    {selectedLayer.keywords &&
                      selectedLayer.keywords.length > 0 && (
                        <div>
                          <span className="font-medium">{t("keywords")}</span>
                          <p className="text-gray-600">
                            {selectedLayer.keywords.join(", ")}
                          </p>
                        </div>
                      )}
                    {(selectedLayer.contactPerson ||
                      selectedLayer.contactOrganization ||
                      selectedLayer.contactEmail) && (
                      <div>
                        <span className="font-medium">{t("contact")}</span>
                        <p className="text-gray-600">
                          {selectedLayer.contactPerson &&
                            `${selectedLayer.contactPerson}, `}
                          {selectedLayer.contactOrganization &&
                            `${selectedLayer.contactOrganization}, `}
                          {selectedLayer.contactEmail &&
                            `${selectedLayer.contactEmail}`}
                        </p>
                      </div>
                    )}
                    {selectedLayer.fees && (
                      <div>
                        <span className="font-medium">{t("fees")}</span>
                        <p className="text-gray-600">{selectedLayer.fees}</p>
                      </div>
                    )}
                    {selectedLayer.accessConstraints && (
                      <div>
                        <span className="font-medium">
                          {t("accessConstraints")}
                        </span>
                        <p className="text-gray-600">
                          {selectedLayer.accessConstraints}
                        </p>
                      </div>
                    )}
                    {selectedLayer.metadataUrl && (
                      <div>
                        <span className="font-medium">{t("metadataUrl")}</span>
                        <a
                          href={selectedLayer.metadataUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-odis-light hover:underline ml-1 inline-flex items-center"
                        >
                          {t("viewFullMetadata")}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    )}
                    {selectedLayer.bounds && (
                      <div>
                        <span className="font-medium">{t("bounds")}</span>
                        <p className="text-gray-600">
                          minX: {selectedLayer.bounds.minx}, minY:{" "}
                          {selectedLayer.bounds.miny}, maxX:{" "}
                          {selectedLayer.bounds.maxx}, maxY:{" "}
                          {selectedLayer.bounds.maxy}
                          {selectedLayer.bounds.crs &&
                            ` (${selectedLayer.bounds.crs})`}
                        </p>
                      </div>
                    )}

                    <div>
                      <span className="font-medium">
                        {t("displayProjection")}
                      </span>
                      <p className="text-gray-600">WGS84 (EPSG:4326)</p>
                    </div>
                    <div>
                      <span className="font-medium">
                        {t("flex items-center text-lg font-medium")}
                      </span>
                      <p className="text-gray-600">{sourceProjection}</p>
                    </div>

                    {/* {selectedLayer.projections.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">
                          {t("availableProjections")}
                        </span>
                        <span className="text-gray-600">
                          {selectedLayer.projections.join(", ")}
                        </span>
                      </div>
                    )} */}

                    {/* WFS Summary Information */}
                    {filteredData && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                        <div className="bg-white p-3 rounded-md border border-[#d0d8ff]">
                          <p className="text-sm font-medium text-odis-light mb-1">
                            {t("featuresLoaded")}
                          </p>
                          {isMaxFeaturesUpdating ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin text-odis-light" />
                              <span>{t("loading")}</span>
                            </div>
                          ) : (
                            <p className="text-lg font-bold">
                              {filteredData.features.length.toLocaleString()}
                              {isFiltered && filteredData.totalFeatures && (
                                <span className="text-xs font-normal text-gray-500 ml-1">
                                  {t("filteredFrom")}{" "}
                                  {filteredData.totalFeatures.toLocaleString()}{" "}
                                  {t("total")}
                                </span>
                              )}
                            </p>
                          )}
                        </div>
                        <div className="bg-white p-3 rounded-md border border-[#d0d8ff]">
                          <p className="text-sm font-medium text-odis-light mb-1">
                            {t("attributes")}
                          </p>
                          <p className="text-lg font-bold">
                            {attributes.length}
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-md border border-[#d0d8ff]">
                          <p className="text-sm font-medium text-odis-light mb-1">
                            {t("geometryType")}
                          </p>
                          <p className="text-lg font-bold">
                            {hasGeometry
                              ? filteredData.features[0]?.geometry?.type ||
                                t("unknown")
                              : t("noGeometry")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <FeatureCountSelector
                maxFeatures={maxFeatures}
                onMaxFeaturesChange={handleMaxFeaturesChange}
                totalFeatureCount={totalFeatureCount}
                isLoadingCount={isLoadingCount || isMaxFeaturesUpdating}
              />
            </div>
          ) : null}

          {(isLoading || isMaxFeaturesUpdating) && (
            <div className="flex justify-center items-center py-12">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
                <Loader2 className="h-10 w-10 animate-spin text-odis-light mb-4" />
                <p className="text-gray-700 font-medium">
                  {isMaxFeaturesUpdating
                    ? t("updatingFeatures").replace(
                        "{count}",
                        maxFeatures.toString()
                      )
                    : t("loadingLayerData")}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {t("loadingTimeWarning")}
                </p>
              </div>
            </div>
          )}

          {filteredData && !error && (
            <div className="space-y-8">
              {/* 1. Map View - Always shown */}
              {hasGeometry && !hasProjectionIssue && (
                <div ref={mapContainerRef} data-map-container className="mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="tracking-tight flex items-center text-lg font-medium">
                        <Map className="h-5 w-5 mr-2 text-[var(--primary-color)]" />
                        {t("mapPreview")}
                      </CardTitle>
                      <CardDescription>
                        {t("mapPreviewDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 h-[500px]">
                      <MapPreview
                        data={filteredData}
                        sourceProjection={sourceProjection}
                        focusFeature={focusedFeature}
                        onClearFocus={handleClearFocusedFeature}
                        onFeatureClick={handleViewFeatureOnMap}
                      />
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* 2. Filter Options */}
              <div className="mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="tracking-tight flex items-center text-lg font-medium">
                      <Filter className="h-5 w-5 mr-2 text-[var(--primary-color)]" />
                      {t("filterOptions")}
                    </CardTitle>
                    <CardDescription>{t("filterDescription")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AttributeFilter
                      data={wfsData}
                      attributes={attributes}
                      onFilterChange={(newFilteredData, filters) =>
                        handleFilterChange(newFilteredData, filters)
                      }
                    />
                  </CardContent>
                </Card>
              </div>

              {/* 3. Data Explorer with Tabs for Attribute Explorer and Statistics */}
              <div className="mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="tracking-tight flex items-center text-lg font-medium">
                      <BarChart3 className="h-5 w-5 mr-2 text-[var(--primary-color)]" />
                      {t("dataExplorer")}
                    </CardTitle>
                    <CardDescription>
                      {t("dataExplorerDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="explorer" className="w-full">
                      <TabsList className="mb-4">
                        <TabsTrigger value="explorer" className="text-sm">
                          <Search className="h-4 w-4 mr-2" />
                          {t("attributeExplorer")}
                        </TabsTrigger>
                        <TabsTrigger value="statistics" className="text-sm">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          {t("statistics")}
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="explorer">
                        <AttributeExplorer
                          data={filteredData}
                          attributes={attributes}
                          selectedAttribute={selectedAttribute}
                          onSelectAttribute={setSelectedAttribute}
                          onViewFeatureOnMap={
                            hasGeometry ? handleViewFeatureOnMap : undefined
                          }
                        />
                      </TabsContent>

                      <TabsContent value="statistics">
                        <AttributeStats
                          data={filteredData}
                          attributes={attributes}
                          selectedAttribute={selectedAttribute}
                          onSelectAttribute={setSelectedAttribute}
                        />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* 4. Download Options */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="tracking-tight flex items-center text-lg font-medium">
                      <Download className="h-5 w-5 mr-2 text-[var(--primary-color)]" />
                      {t("downloadOptions")}
                    </CardTitle>
                    <CardDescription>{t("dataFormats")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {selectedLayer && (
                        <DownloadOptions
                          wfsUrl={wfsUrl}
                          layer={selectedLayer}
                          maxFeatures={maxFeatures}
                          projectionIssue={hasProjectionIssue}
                          totalFeatureCount={totalFeatureCount}
                          loadedFeatureCount={
                            filteredData?.features?.length || 0
                          }
                        />
                      )}

                      {isFiltered && selectedLayer && (
                        <DownloadFilteredOptions
                          filteredData={filteredData}
                          layerId={selectedLayer.id}
                          isFiltered={isFiltered}
                          projectionIssue={hasProjectionIssue}
                          filterCount={activeFilters?.length || 0} // Pass the actual filter count
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
