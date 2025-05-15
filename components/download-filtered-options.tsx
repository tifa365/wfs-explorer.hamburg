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
import { Download, Loader2, Filter } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";

interface DownloadFilteredOptionsProps {
  filteredData: any;
  layerId: string;
  isFiltered: boolean;
  projectionIssue?: boolean;
  filterCount?: number;
}

export function DownloadFilteredOptions({
  filteredData,
  layerId,
  isFiltered,
  projectionIssue = false,
  filterCount = 0,
}: DownloadFilteredOptionsProps) {
  const { t } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);

  // Get the actual feature count from the filtered data
  const featureCount = filteredData?.features?.length || 0;

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      // Create a blob from the filtered data
      const blob = new Blob([JSON.stringify(filteredData, null, 2)], {
        type: "application/json",
      });

      // Create a download link
      const downloadUrl = URL.createObjectURL(blob);
      const projectionLabel = projectionIssue ? "Native" : "WGS84";
      const filename = `${layerId.replace(
        /:/g,
        "_"
      )}_filtered_${projectionLabel}.geojson`;
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
      console.error("Error downloading filtered data:", error);
      alert("Failed to download filtered data. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <h3 className="text-md flex items-center gap-2">
          <Filter className="h-5 w-5" />
          {t("filteredData")}
        </h3>
        {/* <CardDescription>
          {isFiltered ? (
            <div className="flex items-center gap-2">
              <span>{t("currentFilters")}</span>
              <Badge variant="secondary">
                {filterCount} {filterCount === 1 ? t("filter") : t("filters")}
              </Badge>
            </div>
          ) : (
            t("noFiltersApplied")
          )}
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isFiltered ? (
            <div className="text-sm">
              <p className="mb-2">
                {featureCount.toLocaleString()} {t("features")}{" "}
                {t("matchYourFilters")}
              </p>
              <p className="text-muted-foreground">{t("projectionNote")}</p>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">
              {t("applyFiltersFirst")}
            </div>
          )}

          <Button
            onClick={handleDownload}
            className="w-full bg-odis-light hover:bg-active hover:!text-odis-dark text-white"
            disabled={isDownloading || !isFiltered}
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
                {t("downloadFilteredGeoJSON")}{" "}
                {projectionIssue ? `(${t("nativeProjection")})` : "(WGS84)"}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
