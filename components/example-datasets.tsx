"use client";

import type React from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Database, Map, Route, Building, Trees, Waves } from "lucide-react";

interface ExampleDataset {
  nameKey: string;
  url: string;
  descriptionKey: string;
  icon: React.ReactNode;
}

interface ExampleDatasetsProps {
  onSelectDataset: (url: string) => void;
}

export function ExampleDatasets({ onSelectDataset }: ExampleDatasetsProps) {
  const { t } = useLanguage();

  const exampleDatasets: ExampleDataset[] = [
    {
      nameKey: "hamburgBikeRoutes",
      url: "https://geodienste.hamburg.de/wfs_radnetz?Service=WFS&Version=1.1.0&Request=GetCapabilities",
      descriptionKey: "hamburgBikeRoutesDesc",
      icon: <Route className="h-4 w-4" />,
    },
    {
      nameKey: "hamburgBikeRide",
      url: "https://geodienste.hamburg.de/HH_WFS_Bike_und_Ride?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bike_und_ride",
      descriptionKey: "hamburgBikeRideDesc",
      icon: <Route className="h-4 w-4" />,
    },
    {
      nameKey: "hamburgTrees",
      url: "https://geodienste.hamburg.de/HH_WFS_Strassenbaumkataster?SERVICE=WFS&REQUEST=GetCapabilities",
      descriptionKey: "hamburgTreesDesc",
      icon: <Trees className="h-4 w-4" />,
    },
    {
      nameKey: "hamburgCycling",
      url: "https://geodienste.hamburg.de/HH_WFS_Radverkehrsnetz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:radwege_radweg",
      descriptionKey: "hamburgCyclingDesc",
      icon: <Route className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {exampleDatasets.map((dataset) => (
        <Button
          key={dataset.url}
          variant="outline"
          className="flex items-center gap-2 justify-start h-auto py-2 px-3 border hover:bg-active-light text-left"
          onClick={() => onSelectDataset(dataset.url)}
          title={t(dataset.descriptionKey)}
        >
          {" "}
          <div className="flex-1">
            <div className="font-medium text-sm ">{t(dataset.nameKey)}</div>
            <div className="text-xs font-light truncate">
              {t(dataset.descriptionKey)}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}