"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Database } from "lucide-react";
import type { LayerInfo } from "@/lib/wfs-service";
import { fetchWfsDataForDownload } from "@/lib/wfs-service";
import { useLanguage } from "@/lib/language-context";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface DownloadOptionsProps {
  wfsUrl: string;
  layer: LayerInfo;
  maxFeatures: number;
  projectionIssue?: boolean;
  totalFeatureCount?: number | null;
  loadedFeatureCount?: number;
}

export function DownloadOptions({
  wfsUrl,
  layer,
  maxFeatures,
  projectionIssue = false,
  totalFeatureCount = null,
  loadedFeatureCount = 0,
}: DownloadOptionsProps) {
  const { t } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadType, setDownloadType] = useState<"wgs84" | "native">("wgs84");
  const [downloadAll, setDownloadAll] = useState(true);

  // Determine if we should show the "download all" checkbox
  const showDownloadAllOption =
    totalFeatureCount !== null &&
    totalFeatureCount > 0 &&
    loadedFeatureCount < totalFeatureCount;

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      // If there's a projection issue or user selected native, fetch in native projection
      const useNativeProjection = projectionIssue || downloadType === "native";

      // Use 0 as maxFeatures when downloadAll is true to get all features
      const effectiveMaxFeatures = downloadAll ? 0 : maxFeatures;

      // Fetch the data with client-side projection handling
      const data = await fetchWfsDataForDownload(
        wfsUrl,
        layer.id,
        effectiveMaxFeatures,
        layer,
        useNativeProjection
      );

      // Create a blob from the data
      const blob = new Blob([data], { type: "application/json" });

      // Create a download link
      const downloadUrl = URL.createObjectURL(blob);
      const projectionLabel = useNativeProjection
        ? layer.defaultProjection || "Native"
        : "WGS84";
      const filename = `${layer.id.replace(
        /:/g,
        "_"
      )}_${projectionLabel}.geojson`;
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;

      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading data:", error);
      alert("Failed to download data. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <h3 className="text-md flex items-center gap-2">
          <Database className="h-5 w-5" />
          {t("completeData")}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* <div className="space-y-2">
            <p className="text-sm mb-2">{t("projectionFormat")}</p>
            {!projectionIssue ? (
              <Tabs
                defaultValue="wgs84"
                value={downloadType}
                onValueChange={(v) => setDownloadType(v as any)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="wgs84"
                    className="flex items-center gap-1"
                  >
                    <span className="font-medium">WGS84</span>
                    <span className="text-xs text-muted-foreground">
                      (EPSG:4326)
                    </span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="native"
                    className="flex items-center gap-1"
                  >
                    <span className="font-medium">{t("nativeProjection")}</span>
                    <span className="text-xs text-muted-foreground">
                      ({layer.defaultProjection || t("unknown")})
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            ) : (
              <div className="text-sm bg-muted p-2 rounded">
                {t("nativeProjectionOnly")} (
                {layer.defaultProjection || t("unknown")})
              </div>
            )}
          </div> */}
          {/* <div className="text-sm text-muted-foreground">
            {t("downloadCompleteDataText")}
          </div> */}

          {/* <Button
            onClick={handleDownload}
            className="w-full bg-odis-light hover:bg-active hover:!text-odis-dark text-white"
            disabled={isDownloading}
            size="lg"
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("downloading")}
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                {t("downloadGeoJSON")}{" "}
                {projectionIssue || downloadType === "native"
                  ? `(${layer.defaultProjection || t("nativeProjection")})`
                  : "(EPSG:4326)"}
              </>
            )}
          </Button> */}
          <Button
            onClick={handleDownload}
            className="w-full bg-odis-light hover:bg-active hover:!text-odis-dark text-white"
            disabled={isDownloading}
            size="lg"
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("downloading")}
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                {t("downloadGeoJSON")}
              </>
            )}
          </Button>

          {showDownloadAllOption && maxFeatures < totalFeatureCount && (
            <div className="flex items-start space-x-2  pt-3">
              <Checkbox
                id="download-all"
                checked={downloadAll}
                onCheckedChange={(checked) =>
                  setDownloadAll(checked as boolean)
                }
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="download-all"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t("downloadAllFeatures")}
                </Label>
                {totalFeatureCount && (
                  <p className="text-xs text-muted-foreground">
                    {t("totalAvailable")}: {totalFeatureCount.toLocaleString()}{" "}
                    {t("features")}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
