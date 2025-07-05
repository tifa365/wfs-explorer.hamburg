"use client";

import type React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white py-4 border-t border-gray-200 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-4">
          {/* Project information section - simplified to only show ODIS */}
          <div className="flex justify-center">
            {/* ODIS Berlin */}
            <div className="text-center">
              <p className="text-[var(--primary-color)] text-sm font-medium mb-3">
                {t("basedOnProject")} <a href="https://wfsexplorer.odis-berlin.de" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">{t("wfsExplorerProject")}</a> {t("projectBy")}
              </p>
              <a
                href="https://github.com/technologiestiftung/odis-geoexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://logos.citylab-berlin.org/logo-odis-berlin-coloured.svg"
                  alt="Open Data Informationsstelle Berlin"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
