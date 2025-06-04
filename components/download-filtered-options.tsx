"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Filter } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { geojsonToCsv } from "@/lib/geojsonToCsv";

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
  const [isDownloadingGeoJSON, setIsDownloadingGeoJSON] = useState(false);
  const [isDownloadingCSV, setIsDownloadingCSV] = useState(false);

  // Get the actual feature count from the filtered data
  const featureCount = filteredData?.features?.length || 0;

  const handleDownload = async (exportFormat: string) => {
    try {
      if (exportFormat === "csv") {
        setIsDownloadingCSV(true);
      } else {
        setIsDownloadingGeoJSON(true);
      }

      if (exportFormat === "csv") {
        filteredData = geojsonToCsv(filteredData);
      }

      const isCsv = exportFormat === "csv";

      const blob = new Blob(
        [isCsv ? filteredData : JSON.stringify(filteredData, null, 2)],
        {
          type: isCsv
            ? "text/csv;charset=utf-8;"
            : `application/${exportFormat || "json"}`,
        }
      );

      const downloadUrl = URL.createObjectURL(blob);
      const projectionLabel = projectionIssue ? "Native" : "WGS84";
      const filename = `${layerId.replace(
        /:/g,
        "_"
      )}_filtered_${projectionLabel}.${exportFormat || "geojson"}`;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading filtered data:", error);
      alert("Failed to download filtered data. Please try again.");
    } finally {
      setIsDownloadingGeoJSON(false);
      setIsDownloadingCSV(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <h3 className="text-md flex items-center gap-2">
          <Filter className="h-5 w-5" />
          {t("filteredData")}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button
            onClick={() => handleDownload("")}
            className="w-full bg-odis-light hover:bg-active hover:!text-odis-dark text-white"
            disabled={isDownloadingGeoJSON || isDownloadingCSV || !isFiltered}
            size="lg"
          >
            {isDownloadingGeoJSON ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("downloading")}
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                {t("downloadGeoJSON")}{" "}
              </>
            )}
          </Button>

          <Button
            onClick={() => handleDownload("csv")}
            className="w-full bg-odis-light hover:bg-active hover:!text-odis-dark text-white"
            disabled={isDownloadingCSV || isDownloadingGeoJSON || !isFiltered}
            size="lg"
          >
            {isDownloadingCSV ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("downloading")}
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                {t("downloadCSV")}
              </>
            )}
          </Button>

          <div className="text-sm">
            <p className="mb-2 font-light">
              {featureCount.toLocaleString()} {t("features")}{" "}
              {t("matchYourFilters")}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
