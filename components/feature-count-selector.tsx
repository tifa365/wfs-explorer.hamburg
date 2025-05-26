"use client";

import { useLanguage } from "@/lib/language-context";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

interface FeatureCountSelectorProps {
  maxFeatures: number;
  onMaxFeaturesChange: (maxFeatures: number) => void;
  totalFeatureCount: number | null;
  isLoadingCount: boolean;
}

export function FeatureCountSelector(props: FeatureCountSelectorProps) {
  const {
    maxFeatures,
    onMaxFeaturesChange,
    totalFeatureCount,
    isLoadingCount,
  } = props;
  const { t } = useLanguage();
  const [isCustom, setIsCustom] = useState(false);
  const [customValue, setCustomValue] = useState(maxFeatures.toString());
  const [shouldShowSelector, setShouldShowSelector] = useState(true);

  useEffect(() => {
    if (
      totalFeatureCount !== null &&
      totalFeatureCount < 500 &&
      !isLoadingCount
    ) {
      setShouldShowSelector(false);
    } else {
      setShouldShowSelector(true);
    }
  }, [totalFeatureCount, isLoadingCount]);

  // Update custom value when maxFeatures changes
  useEffect(() => {
    const predefinedOptions = [500, 1000, 5000, 10000];
    setIsCustom(
      !predefinedOptions.includes(maxFeatures) &&
        maxFeatures !== totalFeatureCount
    );
    setCustomValue(maxFeatures.toString());
  }, [maxFeatures, totalFeatureCount]);

  // Handle select change
  const handleSelectChange = (value: string) => {
    if (value === "custom") {
      setIsCustom(true);
    } else if (value === "all") {
      setIsCustom(false);
      onMaxFeaturesChange(totalFeatureCount || 100000);
    } else {
      setIsCustom(false);
      onMaxFeaturesChange(Number.parseInt(value, 10));
    }
  };

  // Handle custom value apply
  const handleCustomApply = () => {
    const value = Number.parseInt(customValue, 10);
    if (!isNaN(value) && value > 0) {
      // Ensure we don't exceed the total feature count if known
      if (totalFeatureCount !== null && value > totalFeatureCount) {
        onMaxFeaturesChange(totalFeatureCount);
      } else {
        onMaxFeaturesChange(value);
      }
    }
  };

  if (!shouldShowSelector) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("maxFeatures")}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-amber-600">
          <AlertTriangle className="h-3.5 w-3.5" />
          {t("loadingPerformanceWarning")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="max-features">
              {t("maxFeatures")}
              {totalFeatureCount !== null && totalFeatureCount !== -1 && (
                <>
                  {" "}
                  ({t("ofTotal")} {totalFeatureCount?.toLocaleString()})
                </>
              )}
            </Label>
          </div>

          <div className="flex gap-2">
            <Select
              value={
                isCustom
                  ? "custom"
                  : maxFeatures === totalFeatureCount &&
                    totalFeatureCount !== null
                  ? "all"
                  : maxFeatures.toString()
              }
              onValueChange={handleSelectChange}
            >
              <SelectTrigger id="max-features" className="w-[180px]">
                <SelectValue placeholder="Select limit" />
              </SelectTrigger>
              <SelectContent>
                {[500, 1000, 5000, 10000].map((count) =>
                  totalFeatureCount === null || count <= totalFeatureCount ? (
                    <SelectItem key={count} value={count.toString()}>
                      {t(`features${count}`)}
                    </SelectItem>
                  ) : null
                )}
                {totalFeatureCount !== null &&
                  totalFeatureCount > 0 &&
                  maxFeatures < totalFeatureCount && (
                    <SelectItem value="all">
                      {t("allFeatures")} ({totalFeatureCount.toLocaleString()})
                    </SelectItem>
                  )}
                <SelectItem value="custom">{t("customValue")}</SelectItem>
              </SelectContent>
            </Select>

            {isCustom && (
              <div className="flex gap-2">
                <input
                  type="number"
                  value={customValue}
                  onChange={(e) => {
                    const value = Number.parseInt(e.target.value, 10);
                    // Don't allow values greater than total feature count if known
                    if (
                      totalFeatureCount !== null &&
                      !isNaN(value) &&
                      value > totalFeatureCount
                    ) {
                      setCustomValue(totalFeatureCount.toString());
                    } else {
                      setCustomValue(e.target.value);
                    }
                  }}
                  className="w-24 px-3 py-2 border rounded-md"
                  min="1"
                  max={
                    totalFeatureCount !== null ? totalFeatureCount : undefined
                  }
                />
                <Button size="sm" onClick={handleCustomApply}>
                  {t("apply")}
                </Button>
              </div>
            )}
          </div>

          <p className="text-xs text-muted-foreground mt-1">
            {t("downloadAllNote")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
