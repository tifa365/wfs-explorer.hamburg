export function geojsonToCsv(geoJsonData: {
  features: Array<{ properties: Record<string, any> }>;
}): string {
  if (!geoJsonData.features || geoJsonData.features.length === 0) {
    console.error("GeoJSON has no features.");
    return "geojson has no features";
  }

  // Collect all unique headers from all features
  const headerSet = new Set<string>();
  for (const feature of geoJsonData.features) {
    const props = feature.properties;
    if (props && typeof props === "object") {
      Object.keys(props).forEach((key) => headerSet.add(key));
    }
  }

  const headers = Array.from(headerSet);
  const csvRows: string[] = [headers.join(",")];

  // Convert each feature into a CSV row
  for (const feature of geoJsonData.features) {
    const values = headers.map((key) => {
      const val = feature.properties?.[key] ?? "";
      if (typeof val === "string") {
        if (/[",\n]/.test(val)) {
          return `"${val.replace(/"/g, '""')}"`;
        }
        return val;
      }
      return String(val);
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
}
