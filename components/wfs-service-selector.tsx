"use client";

import { useState, useMemo, useCallback } from "react";
import { useLanguage } from "@/lib/language-context";
import { wfsCatalog, type WfsService } from "@/lib/wfs-catalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useMemo(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface WfsServiceSelectorProps {
  onSelectService: (url: string) => void;
}

export function WfsServiceSelector({ onSelectService }: WfsServiceSelectorProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"search" | "paste">("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [pasteUrl, setPasteUrl] = useState("");
  const [selectedService, setSelectedService] = useState<WfsService | null>(null);

  // Reduce debounce time for faster response
  const debouncedSearchQuery = useDebounce(searchQuery, 150);

  // Pre-process catalog with lowercase text for faster searching
  const processedCatalog = useMemo(() => 
    wfsCatalog.map(service => ({
      ...service,
      searchText: `${service.title} ${service.description} ${service.organization} ${service.keywords.join(' ')}`.toLowerCase()
    })), []
  );

  // Filter services with optimized search
  const filteredServices = useMemo(() => {
    if (!debouncedSearchQuery.trim()) return [];
    
    const query = debouncedSearchQuery.toLowerCase();
    const results = [];
    
    // Fast search with early exit at 15 results
    for (const service of processedCatalog) {
      if (service.searchText.includes(query)) {
        results.push(service);
        if (results.length >= 15) break; // Stop early for performance
      }
    }

    // Sort by relevance (title matches first) - only for found results
    results.sort((a, b) => {
      const aInTitle = a.title.toLowerCase().includes(query);
      const bInTitle = b.title.toLowerCase().includes(query);
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      return 0;
    });

    return results;
  }, [debouncedSearchQuery, processedCatalog]);

  const handleSelectService = (service: WfsService) => {
    setSelectedService(service);
    // Auto-load the selected service
    onSelectService(service.url);
    // Clear search to close dropdown
    setSearchQuery("");
  };

  const handleLoadService = () => {
    if (activeTab === "search" && selectedService) {
      onSelectService(selectedService.url);
    } else if (activeTab === "paste" && pasteUrl) {
      onSelectService(pasteUrl);
    }
  };

  const isLoadDisabled = activeTab === "search" ? !selectedService : !pasteUrl.trim();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {t("wfsService")}
      </label>
      
      {/* Tab Navigation */}
      <div className="flex items-center gap-4 mb-4">
        <button
          className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
            activeTab === "search"
              ? "text-hamburg-blue border-hamburg-blue"
              : "text-gray-500 border-transparent hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("search")}
        >
          {t("searchServices")}
        </button>
        <button
          className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
            activeTab === "paste"
              ? "text-hamburg-blue border-hamburg-blue"
              : "text-gray-500 border-transparent hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("paste")}
        >
          {t("pasteUrl")}
        </button>
        {activeTab === "paste" && (
          <div className="ml-auto">
            <a
              href="https://suche.transparenz.hamburg.de/dataset?q=&sort=score+desc&limit=20&esq_not_all_versions=true&res_format=wfs&forceWeb=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-hamburg-blue hover:underline"
            >
              {t("openDataPortal")}
            </a>
          </div>
        )}
      </div>

      {/* Search Tab Content */}
      {activeTab === "search" && (
        <div>
          {/* Search Input */}
          <div className="relative mb-3">
            <Input
              type="text"
              placeholder={t("searchWfsServices")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-4 max-h-64 overflow-y-auto border border-gray-200 rounded-md">
              {searchQuery && !debouncedSearchQuery ? (
                <div className="p-4 text-sm text-gray-500 text-center">
                  Searching...
                </div>
              ) : filteredServices.length === 0 ? (
                <div className="p-4 text-sm text-gray-500 text-center">
                  No results found
                </div>
              ) : (
                filteredServices.map((service) => (
                  <button
                    key={service.id}
                    className={`w-full text-left p-3 hover:bg-gray-50 border-b last:border-b-0 transition-colors ${
                      selectedService?.id === service.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleSelectService(service)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900">
                          {service.title}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {service.organization} • {service.description}
                        </div>
                      </div>
                      {selectedService?.id === service.id && (
                        <span className="text-xs text-hamburg-blue ml-2">
                          Selected
                        </span>
                      )}
                    </div>
                  </button>
                ))
              )}
            </div>
          )}

        </div>
      )}

      {/* Paste URL Tab Content */}
      {activeTab === "paste" && (
        <div>
          <Input
            type="text"
            placeholder={t("pasteWfsUrlHere")}
            value={pasteUrl}
            onChange={(e) => setPasteUrl(e.target.value)}
            className="mb-2"
          />
          <p className="text-xs text-gray-500">
            {t("enterValidWfsUrl")}
          </p>
        </div>
      )}

      {/* Load Button - only for paste tab */}
      {activeTab === "paste" && (
        <Button
          onClick={handleLoadService}
          disabled={!pasteUrl.trim()}
          className="w-full mt-4"
        >
          {t("loadService")}
        </Button>
      )}
    </div>
  );
}