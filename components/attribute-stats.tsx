"use client";

import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { calculateAttributeStats } from "@/lib/stats-utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface AttributeStatsProps {
  data: any;
  attributes: string[];
  selectedAttribute: string | null;
  onSelectAttribute: (attribute: string) => void;
}

export function AttributeStats({
  data,
  attributes,
  selectedAttribute,
  onSelectAttribute,
}: AttributeStatsProps) {
  const [topValuesLimit, setTopValuesLimit] = useState(5);
  const { t } = useLanguage();

  const stats = useMemo(() => {
    if (!data || !selectedAttribute) return null;
    return calculateAttributeStats(data.features, selectedAttribute);
  }, [data, selectedAttribute]);

  if (!data || !data.features || data.features.length === 0) {
    return <div className="text-center py-8">{t("noDataAvailable")}</div>;
  }

  // Add this after the stats calculation
  const totalFeatures = data?.features?.length || 0;
  const totalDatasetFeatures = data?.totalFeatures || totalFeatures;
  const hasFilteredData = totalDatasetFeatures > totalFeatures;

  const handleShowMore = () => {
    setTopValuesLimit((prev) =>
      Math.min(prev + 5, stats?.topValues?.length || 0)
    );
  };

  const handleShowLess = () => {
    setTopValuesLimit(5);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="stats-attribute-select">{t("selectAttribute")}</Label>
        <Select
          value={selectedAttribute || ""}
          onValueChange={onSelectAttribute}
        >
          <SelectTrigger id="stats-attribute-select">
            <SelectValue placeholder={t("selectAttributeFirst")} />
          </SelectTrigger>
          <SelectContent>
            {attributes.map((attr) => (
              <SelectItem key={attr} value={attr}>
                {attr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {stats && (
        <div className="space-y-6">
          {totalFeatures > 0 && (
            <div className="mb-4 text-sm">
              <p>
                {hasFilteredData ? (
                  <span>
                    {t("statisticsFor")}{" "}
                    <strong>{totalFeatures.toLocaleString()}</strong>{" "}
                    {t("featuresOf")}{" "}
                    <strong>{totalDatasetFeatures.toLocaleString()}</strong>{" "}
                    {t("total")}
                  </span>
                ) : (
                  <span>
                    {t("statisticsFor")}{" "}
                    <strong>{totalFeatures.toLocaleString()}</strong>{" "}
                    {t("features")}
                  </span>
                )}
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard title={t("dataType")} value={stats.dataType} />
            <StatCard title={t("count")} value={stats.count.toString()} />
            <StatCard
              title={t("uniqueValues")}
              value={stats.uniqueCount.toString()}
            />

            {stats.dataType === "number" && (
              <>
                <StatCard
                  title={t("minimumValue")}
                  value={stats.min.toString()}
                />
                <StatCard
                  title={t("maximumValue")}
                  value={stats.max.toString()}
                />
                <StatCard
                  title={t("averageValue")}
                  value={stats.average.toFixed(2)}
                />
              </>
            )}

            {stats.dataType === "string" && (
              <>
                <StatCard
                  title={t("minimumLength")}
                  value={stats.minLength.toString()}
                />
                <StatCard
                  title={t("maximumLength")}
                  value={stats.maxLength.toString()}
                />
                <StatCard
                  title={t("averageLength")}
                  value={stats.avgLength.toFixed(2)}
                />
              </>
            )}
          </div>

          {stats.dataType !== "boolean" &&
            stats.topValues &&
            stats.topValues.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base font-medium">{t("topValuesTitle")}</h3>
                <div className="space-y-3">
                  {stats.topValues
                    .slice(0, topValuesLimit)
                    .map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium truncate max-w-[70%]">
                            {item.value === ""
                              ? t("empty")
                              : String(item.value)}
                          </span>
                          <span className="text-gray-500">
                            {item.count} ({Math.round(item.percentage)}%)
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                </div>

                {stats.topValues.length > 5 && (
                  <div className="flex justify-center mt-2">
                    {topValuesLimit < stats.topValues.length ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleShowMore}
                        className="text-xs flex items-center gap-1"
                      >
                        {t("showMore")} <ChevronDown className="h-3 w-3" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleShowLess}
                        className="text-xs flex items-center gap-1"
                      >
                        {t("showLess")} <ChevronUp className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}

          {stats.dataType === "boolean" && (
            <div className="space-y-3">
              <h3 className="text-base font-medium">
                {t("valueDistributionTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t("trueValue")}</span>
                    <span className="text-gray-500">
                      {stats.trueCount} ({Math.round(stats.truePercentage)}%)
                    </span>
                  </div>
                  <Progress value={stats.truePercentage} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{t("falseValue")}</span>
                    <span className="text-gray-500">
                      {stats.falseCount} ({Math.round(stats.falsePercentage)}%)
                    </span>
                  </div>
                  <Progress value={stats.falsePercentage} className="h-2" />
                </div>
              </div>
            </div>
          )}

          {stats.nullCount > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{t("missingValuesTitle")}</span>
                <span className="text-gray-500">
                  {stats.nullCount} ({Math.round(stats.nullPercentage)}%)
                </span>
              </div>
              <Progress value={stats.nullPercentage} className="h-2" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  const { t } = useLanguage();
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-xs font-medium text-gray-500 uppercase">
        {t("statCard") === title ? title : t(title as any)}
      </p>
      <p className="text-lg font-semibold truncate mt-1">{value}</p>
    </div>
  );
}
