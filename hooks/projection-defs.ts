import { useEffect } from "react";

export function useLeafletWithProj4({
  onReady,
  projectionDefs,
}: {
  onReady: () => void;
  projectionDefs: Record<string, string>;
}) {
  useEffect(() => {
    const proj4Script = document.createElement("script");
    proj4Script.src = "./libs/proj4.min.js";
    proj4Script.onload = () => {
      Object.entries(projectionDefs).forEach(([code, def]) => {
        window.proj4.defs(code, def);
      });
      loadLeaflet();
    };
    document.head.appendChild(proj4Script);

    function loadLeaflet() {
      const leafletCSS = document.createElement("link");
      leafletCSS.rel = "stylesheet";
      leafletCSS.href = "./libs/leaflet.css";
      document.head.appendChild(leafletCSS);

      const leafletScript = document.createElement("script");
      leafletScript.src = "./libs/leaflet.js";
      leafletScript.onload = onReady;
      document.head.appendChild(leafletScript);
    }

    return () => {
      // Optional: cleanup
    };
  }, [onReady, projectionDefs]);
}
