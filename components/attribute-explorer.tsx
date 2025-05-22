"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

interface AttributeExplorerProps {
  data: any;
  attributes: string[];
  selectedAttribute: string | null;
  onSelectAttribute: (attribute: string) => void;
  onViewFeatureOnMap?: (feature: any) => void;
}

type SortDirection = "asc" | "desc" | null;
type SortConfig = {
  key: string | null;
  direction: SortDirection;
};

export function AttributeExplorer({
  data,
  attributes,
  selectedAttribute,
  onSelectAttribute,
  onViewFeatureOnMap,
}: AttributeExplorerProps) {
  const { t } = useLanguage();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });
  const pageSize = 10;
  const tableRef = useRef<HTMLDivElement>(null);
  const [tableScrollTop, setTableScrollTop] = useState(0);
  const [attributeValueSuggestions, setAttributeValueSuggestions] = useState<
    string[]
  >([]);
  const [suggestionsNeedUpdate, setSuggestionsNeedUpdate] = useState(false);

  // Check if we have valid data
  const hasValidData = data && data.features && data.features.length > 0;

  // Generate suggestions when selected attribute changes
  useEffect(() => {
    if (selectedAttribute && hasValidData) {
      setSuggestionsNeedUpdate(true);
    } else {
      setAttributeValueSuggestions([]);
      setSuggestionsNeedUpdate(false);
    }
  }, [selectedAttribute, data, hasValidData]);

  useEffect(() => {
    if (suggestionsNeedUpdate && hasValidData) {
      const suggestions = getSuggestionsForAttribute(selectedAttribute!);
      setAttributeValueSuggestions(suggestions);
      setSuggestionsNeedUpdate(false);
    }
  }, [suggestionsNeedUpdate, selectedAttribute, hasValidData]);

  // Get suggestions for attribute values
  const getSuggestionsForAttribute = (attribute: string): string[] => {
    if (!hasValidData) return [];

    const uniqueValues = new Set<string>();
    const maxSuggestions = 20;

    // Collect unique values for the attribute
    data.features.forEach((feature: any) => {
      if (
        feature.properties &&
        feature.properties[attribute] !== undefined &&
        feature.properties[attribute] !== null
      ) {
        uniqueValues.add(String(feature.properties[attribute]));
      }
    });

    // Convert to array and limit to max suggestions
    return Array.from(uniqueValues).slice(0, maxSuggestions);
  };

  // Use empty array as fallback when no features
  const features = hasValidData ? data.features : [];

  // Filter features based on the search term and selected attribute
  const filteredFeatures = useMemo(() => {
    if (!hasValidData) return [];

    return filter && selectedAttribute
      ? features.filter((feature: any) => {
          const value = feature.properties[selectedAttribute];
          return (
            value !== undefined &&
            String(value).toLowerCase().includes(filter.toLowerCase())
          );
        })
      : features;
  }, [features, filter, selectedAttribute, hasValidData]);

  // Sort features based on the sort configuration
  const sortedFeatures = useMemo(() => {
    if (!hasValidData || !sortConfig.key || !sortConfig.direction) {
      return filteredFeatures;
    }

    return [...filteredFeatures].sort((a, b) => {
      // Handle ID column specially
      if (sortConfig.key === "id") {
        const aId = a.id || "0";
        const bId = b.id || "0";

        // Try to convert to numbers if possible
        const aIdNum = Number(aId);
        const bIdNum = Number(bId);

        if (!isNaN(aIdNum) && !isNaN(bIdNum)) {
          return sortConfig.direction === "asc"
            ? aIdNum - bIdNum
            : bIdNum - aIdNum;
        }

        // Fall back to string comparison
        return sortConfig.direction === "asc"
          ? String(aId).localeCompare(String(bId))
          : String(bId).localeCompare(String(aId));
      }

      // For property columns
      const aValue = a.properties[sortConfig.key];
      const bValue = b.properties[sortConfig.key];

      // Handle undefined or null values
      if (aValue === undefined || aValue === null)
        return sortConfig.direction === "asc" ? -1 : 1;
      if (bValue === undefined || bValue === null)
        return sortConfig.direction === "asc" ? 1 : -1;

      // Handle numeric values
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      // Handle date values
      const aDate = new Date(aValue);
      const bDate = new Date(bValue);
      if (!isNaN(aDate.getTime()) && !isNaN(bDate.getTime())) {
        return sortConfig.direction === "asc"
          ? aDate.getTime() - bDate.getTime()
          : bDate.getTime() - aDate.getTime();
      }

      // Default to string comparison
      return sortConfig.direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [filteredFeatures, sortConfig, hasValidData]);

  // Calculate pagination
  const totalPages = Math.ceil(sortedFeatures.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedFeatures = sortedFeatures.slice(
    startIndex,
    startIndex + pageSize
  );

  // Generate page numbers for pagination
  const pageNumbers = [];
  const maxPageButtons = 5;

  if (totalPages <= maxPageButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Always show first page
    pageNumbers.push(1);

    // Calculate start and end of the middle section
    let startPage = Math.max(2, page - 1);
    let endPage = Math.min(totalPages - 1, page + 1);

    // Adjust if we're near the beginning or end
    if (page <= 3) {
      endPage = Math.min(totalPages - 1, 4);
    } else if (page >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3);
    }

    // Add ellipsis if needed
    if (startPage > 2) {
      pageNumbers.push("...");
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    // Always show last page
    pageNumbers.push(totalPages);
  }

  // Scroll to top of table when page changes
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = tableScrollTop;
    }
  }, [page, tableScrollTop]);

  // Set scroll to top when page changes
  useEffect(() => {
    setTableScrollTop(0);
  }, [page]);

  // Handle view on map button click
  const handleViewOnMap = (feature: any) => {
    if (onViewFeatureOnMap) {
      onViewFeatureOnMap(feature);

      // Scroll to the map section
      setTimeout(() => {
        const mapElement = document.querySelector("[data-map-container]");
        if (mapElement) {
          mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  // Handle sort
  const handleSort = (key: string) => {
    let direction: SortDirection = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  // Get sort icon
  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) {
      return <ArrowUpDown className="h-4 w-4 ml-1 opacity-50" />;
    }

    if (sortConfig.direction === "asc") {
      return <ArrowUp className="h-4 w-4 ml-1" />;
    }

    if (sortConfig.direction === "desc") {
      return <ArrowDown className="h-4 w-4 ml-1" />;
    }

    return <ArrowUpDown className="h-4 w-4 ml-1 opacity-50" />;
  };

  // If no data, show a message instead of the table
  if (!hasValidData) {
    return <div className="text-center py-8">{t("noDataAvailable")}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="attribute-select">{t("selectAttribute")}</Label>
          <Select
            value={selectedAttribute || ""}
            onValueChange={onSelectAttribute}
          >
            <SelectTrigger id="attribute-select">
              <SelectValue placeholder={t("selectAttribute")} />
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

        <div className="space-y-2">
          <Label htmlFor="filter-input">{t("filter")}</Label>
          <div className="relative">
            <Input
              id="filter-input"
              placeholder={
                selectedAttribute
                  ? `${t("filterByAttribute")} ${selectedAttribute}`
                  : t("selectAttributeFirst")
              }
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1); // Reset to first page when filtering
              }}
              disabled={!selectedAttribute}
              list="attribute-filter-suggestions"
            />
            <datalist id="attribute-filter-suggestions">
              {attributeValueSuggestions.map((suggestion, idx) => (
                <option key={idx} value={suggestion} />
              ))}
            </datalist>
          </div>
        </div>
      </div>

      <div
        className="border rounded-md overflow-auto"
        ref={tableRef}
        style={{ maxHeight: "500px" }}
      >
        <Table>
          <TableHeader>
            <TableRow>
              {onViewFeatureOnMap && (
                <TableHead className="w-[60px] text-center">Map</TableHead>
              )}
              <TableHead
                className="w-[80px] cursor-pointer hover:bg-muted/50 text-xs font-medium uppercase text-gray-500"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center">
                  {t("id")}
                  {getSortIcon("id")}
                </div>
              </TableHead>
              {attributes.map((attr) => (
                <TableHead
                  key={attr}
                  className={`cursor-pointer hover:bg-muted/50 text-xs font-medium uppercase text-gray-500 ${
                    selectedAttribute === attr ? "bg-muted" : ""
                  }`}
                  onClick={() => handleSort(attr)}
                >
                  <div className="flex items-center">
                    {attr}
                    {getSortIcon(attr)}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedFeatures.map((feature: any, index: number) => (
              <TableRow key={feature.id || index}>
                {onViewFeatureOnMap && (
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewOnMap(feature)}
                      disabled={!feature.geometry}
                      title={
                        feature.geometry ? t("viewOnMap") : t("noGeometry")
                      }
                    >
                      <MapPin className="h-4 w-4 text-odis-light  hover:bg-accent" />
                    </Button>
                  </TableCell>
                )}
                <TableCell className="font-medium">
                  {feature.id || startIndex + index + 1}
                </TableCell>
                {attributes.map((attr) => (
                  <TableCell
                    key={attr}
                    className={selectedAttribute === attr ? "bg-muted/30" : ""}
                  >
                    {feature.properties[attr] !== undefined
                      ? String(feature.properties[attr])
                      : "N/A"}
                  </TableCell>
                ))}
              </TableRow>
            ))}

            {paginatedFeatures.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={attributes.length + (onViewFeatureOnMap ? 2 : 1)}
                  className="text-center h-24"
                >
                  {t("noResults")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) setPage(page - 1);
                }}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {pageNumbers.map((pageNum, i) => (
              <PaginationItem key={i}>
                {pageNum === "..." ? (
                  <span className="px-4 py-2">...</span>
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(pageNum as number);
                    }}
                    isActive={page === pageNum}
                  >
                    {pageNum}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page < totalPages) setPage(page + 1);
                }}
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <div className="text-xs text-gray-500">
        {t("showing")} {paginatedFeatures.length} {t("of")}{" "}
        {sortedFeatures.length} {t("entries")}
        {sortedFeatures.length !== features.length &&
          ` (${t("filteredFromTotal")} ${features.length} ${t("total")})`}
      </div>
    </div>
  );
}
