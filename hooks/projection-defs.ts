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
      onReady();
    };
    document.head.appendChild(proj4Script);

    return () => {
      // Optional: cleanup
    };
  }, [onReady, projectionDefs]);
}
