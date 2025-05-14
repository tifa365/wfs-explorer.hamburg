// Translation keys for the application
export type TranslationKey =
  | "appTitle"
  | "appSubtitle"
  | "wfsUrlLabel"
  | "wfsUrlPlaceholder"
  | "analyzeButton"
  | "discoveringLayers"
  | "wfsDescription"
  | "errorTitle"
  | "enterWfsUrl"
  | "noLayersFound"
  | "corsIssueDetected"
  | "corsDescription"
  | "corsOption1"
  | "corsOption2"
  | "corsOption3"
  | "availableLayers"
  | "layersDescription"
  | "currentLayer"
  | "layer"
  | "changeLayer"
  | "displayProjection"
  | "sourceProjection"
  | "availableProjections"
  | "loadFullMetadata"
  | "loadingMetadata"
  | "additionalMetadata"
  | "keywords"
  | "contact"
  | "fees"
  | "accessConstraints"
  | "metadataUrl"
  | "viewFullMetadata"
  | "maxFeatures"
  | "totalFeatures"
  | "counting"
  | "unknown"
  | "countNotSupported"
  | "downloadData"
  | "downloadDescription"
  | "downloading"
  | "downloadGeoJSON"
  | "downloadFilteredData"
  | "downloadFilteredDescription"
  | "downloadFilteredGeoJSON"
  | "loadingLayerData"
  | "wfsSummary"
  | "wfsSummaryDescription"
  | "featuresLoaded"
  | "filteredFrom"
  | "ofTotal"
  | "attributes"
  | "geometryType"
  | "usingWGS84"
  | "mapPreview"
  | "mapPreviewDescription"
  | "loadingMap"
  | "attributeFilters"
  | "activeFilters"
  | "clearAll"
  | "filterCondition"
  | "attribute"
  | "operator"
  | "value"
  | "minValue"
  | "maxValue"
  | "selectAttribute"
  | "selectOperator"
  | "selectValue"
  | "addFilter"
  | "clear"
  | "applyFilters"
  | "attributeExplorer"
  | "attributeStatistics"
  | "noDataAvailable"
  | "id"
  | "noResults"
  | "showing"
  | "entries"
  | "filteredFromTotal"
  | "dataType"
  | "count"
  | "uniqueValues"
  | "min"
  | "max"
  | "average"
  | "minLength"
  | "maxLength"
  | "avgLength"
  | "topValues"
  | "showMore"
  | "showLess"
  | "valueDistribution"
  | "true"
  | "false"
  | "missingValues"
  | "exampleDatasets"
  | "exampleDatasetsDescription"
  | "berlinCemeteries"
  | "berlinCemeteriesDesc"
  | "berlinBlocks"
  | "berlinBlocksDesc"
  | "berlinHikingTrails"
  | "berlinHikingTrailsDesc"
  | "berlinEnergy"
  | "berlinEnergyDesc"
  | "filter"
  | "features"
  | "of"
  | "language"
  | "english"
  | "german"
  | "total"
  | "loadingMap"
  | "projectionError"
  | "projectionErrorDesc"
  | "projectionWarning"
  | "nativeProjection"
  | "nativeProjectionOnly"
  | "mapNotAvailable"
  | "useNativeProjection"
  | "downloadAllFeatures"
  // Add these new translation keys to the TranslationKey type
  | "loadingPerformanceWarning"
  | "allFeatures"
  | "downloadAllNote"
  // New translation keys
  | "clearSelection"
  | "viewOnMap"
  | "noGeometry"
  | "attributeStatisticsTitle"
  | "selectAttributeFirst"
  | "filterByAttribute"
  | "apply"
  | "coordinates"
  | "lat"
  | "lng"
  | "featureProperties"
  | "bounds"
  | "checkConsole"
  | "statisticsFor"
  | "featuresOf"
  | "empty"
  | "statCard"
  | "topValuesTitle"
  | "valueDistributionTitle"
  | "trueValue"
  | "falseValue"
  | "missingValuesTitle"
  | "availableLayersTitle"
  | "availableLayersDescription"
  | "customValue"
  | "features500"
  | "features1000"
  | "features5000"
  | "features10000"
  | "custom"
  | "wgs84"
  | "map"
  | "loaded"
  | "share"
  | "shareWfs"
  | "copied"
  | "minimumValue"
  | "maximumValue"
  | "averageValue"
  | "minimumLength"
  | "maximumLength"
  | "averageLength"
  | "mostFrequent"
  // New download section translations
  | "downloadOptions"
  | "dataFormats"
  | "completeData"
  | "filteredData"
  | "availableFormats"
  | "includeAllFeatures"
  | "currentFilters"
  | "noFiltersApplied"
  // New UI translations
  | "exploreAndAnalyze"
  | "wfsData"
  | "toolDescription"
  | "keyFeatures"
  | "mapVisualization"
  | "statistics"
  | "filtering"
  | "wgs84Conversion"
  | "dataDownload"
  | "metadataInfo"
  | "interactiveMetadataInfo"
  | "interactiveMetadataInfoDescription"
  | "interactiveMapVisualization"
  | "interactiveMapDescription"
  | "attributeStatisticsDescription"
  | "advancedFiltering"
  | "advancedFilteringDescription"
  | "projectionConversion"
  | "projectionConversionDescription"
  | "formatConversion"
  | "formatConversionDescription"
  | "dataDownloadDescription"
  | "hideExampleDatasets"
  | "showExampleDatasets"
  | "jsonFormatNotSupported"
  | "jsonFormatNotSupportedDesc"
  | "mapPreviewUnavailable"
  | "dataDownloadUnavailable"
  | "attributeStatisticsUnavailable"
  | "limitedFunctionality"
  | "showLessDetails"
  | "showMoreDetails"
  | "loading"
  | "updatingFeatures"
  | "loadingTimeWarning"
  | "filterOptions"
  | "filterDescription"
  | "dataExplorer"
  | "dataExplorerDescription"
  | "invalidWfsUrl"
  | "wfsServiceNotFound"
  | "authenticationRequired"
  | "networkError"
  | "serverError"
  | "troubleshootingSuggestions"
  | "checkUrlTypos"
  | "verifyValidWfs"
  | "checkServerOnline"
  | "tryAddingWfs"
  | "tryExampleDatasets"
  | "unknownError"
  | "fetchDataError"
  | "maxFeaturesUpdateError"
  | "downloadFullDataset"
  | "projectionFormat"
  | "totalAvailable"
  | "downloadGeoJSON"
  | "filteredFeatureCount"
  | "projectionNote"
  | "applyFiltersFirst"
  | "filters"
  | "downloadFilteredGeoJSON"
  | "matchYourFilters"
  | "projectBy"
  | "conductedBy"
  | "inCollaborationWith"
  | "fundedBy"
  | "privacyPolicy"
  | "feedback"
  | "github"
  | "contact"
  | "imprint";

// English translations
export const enTranslations: Record<TranslationKey, string> = {
  appTitle: "WFS Explorer",
  appSubtitle: "Web Feature Service Data Analysis Tool",
  wfsUrlLabel: "WFS URL",
  wfsUrlPlaceholder: "Enter WFS URL",
  analyzeButton: "Load",
  discoveringLayers: "Discovering Layers...",
  wfsDescription: "Enter a valid WFS URL to analyze its layers and data",
  errorTitle: "Error",
  enterWfsUrl: "Please enter a WFS URL",
  noLayersFound: "No layers found in the WFS service",
  corsIssueDetected: "CORS Issue Detected",
  corsDescription:
    "This error may be caused by Cross-Origin Resource Sharing (CORS) restrictions. The WFS server may not allow requests from your browser. Try:",
  corsOption1: "Using a WFS service that supports CORS",
  corsOption2: "Using a proxy server to bypass CORS restrictions",
  corsOption3: "Running this application on the same domain as the WFS service",
  availableLayers: "Available Layers",
  layersDescription:
    "This WFS service contains multiple layers. Please select one to analyze.",
  currentLayer: "Current Layer",
  layer: "Layer:",
  changeLayer: "Change Layer",
  displayProjection: "Display Projection:",
  sourceProjection: "Native Source Projection:",
  availableProjections: "Available Projections:",
  loadFullMetadata: "Show more Metadata",
  loadingMetadata: "Loading Metadata...",
  additionalMetadata: "Additional Metadata",
  keywords: "Keywords:",
  contact: "Contact:",
  fees: "Fees:",
  accessConstraints: "Access Constraints:",
  metadataUrl: "Metadata URL:",
  viewFullMetadata: "View Full Metadata",
  maxFeatures: "Maximum Features to Load",
  totalFeatures: "Total Features Available",
  counting: "Counting...",
  unknown: "Unknown",
  countNotSupported: "Count not supported",
  downloadData: "Download Data",
  downloadDescription: "Download the WFS data as GeoJSON",
  downloading: "Downloading...",
  downloadGeoJSON: "Download GeoJSON",
  downloadFilteredData: "Download Filtered Data",
  downloadFilteredDescription: "Download the filtered WFS data as GeoJSON",
  downloadFilteredGeoJSON: "Download Filtered GeoJSON",
  loadingLayerData: "Loading layer data...",
  wfsSummary: "WFS Summary",
  wfsSummaryDescription: "Overview of the analyzed WFS data",
  featuresLoaded: "Features Loaded",
  filteredFrom: "filtered from",
  ofTotal: "of",
  attributes: "Attributes",
  geometryType: "Geometry Type",
  usingWGS84: "Using WGS84 (EPSG:4326) projection",
  mapPreview: "Map Preview",
  mapPreviewDescription:
    "Spatial visualization of the WFS data in WGS84 projection",
  loadingMap: "Loading map...",
  attributeFilters: "Attribute Filters",
  activeFilters: "Active Filters:",
  clearAll: "Clear All",
  filterCondition: "Filter Condition",
  attribute: "Attribute",
  operator: "Operator",
  value: "Value",
  minValue: "Min Value",
  maxValue: "Max Value",
  selectAttribute: "Select attribute",
  selectOperator: "Select operator",
  selectValue: "Select value",
  addFilter: "Add Filter",
  clear: "Clear",
  applyFilters: "Apply Filters",
  attributeExplorer: "Attribute Explorer",
  attributeStatistics: "Attribute Statistics",
  noDataAvailable: "No data available",
  id: "ID",
  noResults: "No results found",
  showing: "Showing",
  entries: "entries",
  filteredFromTotal: "filtered from",
  dataType: "Data Type",
  count: "Count",
  uniqueValues: "Unique Values",
  min: "Min",
  max: "Max",
  average: "Average",
  minLength: "Min Length",
  maxLength: "Max Length",
  avgLength: "Avg Length",
  topValues: "Top Values",
  showMore: "Show More",
  showLess: "Show Less",
  valueDistribution: "Value Distribution",
  true: "True",
  false: "False",
  missingValues: "Missing Values",
  exampleDatasets: "Example services",
  exampleDatasetsDescription:
    "Try these example WFS services to explore the analyzer",
  berlinCemeteries: "Berlin Cemeteries",
  berlinCemeteriesDesc: "Cemetery locations and information in Berlin",
  berlinBlocks: "Berlin Blocks",
  berlinBlocksDesc: "Urban blocks and statistical areas in Berlin",
  berlinHikingTrails: "Berlin Hiking Trails",
  berlinHikingTrailsDesc: "Hiking and walking trails in Berlin",
  berlinEnergyDesc:
    "Energy consumption data at postcode, block and district level",
  berlinEnergy: "Energy consumption in Berlin",
  filter: "Filter",
  features: "features",
  of: "of",
  language: "Language",
  english: "English",
  german: "German",
  total: "total",
  loadingMap: "Loading map...",

  // Projection related translations
  projectionError: "Projection Error",
  projectionErrorDesc:
    "Map preview is not available. Use the download option with native projection instead.",
  projectionWarning: "Projection Warning",
  nativeProjection: "Native",
  nativeProjectionOnly:
    "Native projection only - WGS84 conversion not available",
  mapNotAvailable:
    "Map preview not available due to unsupported projection system",
  useNativeProjection: "Use native projection instead",
  downloadAllFeatures: "Download all features",

  // Add these translations to the enTranslations object
  loadingPerformanceWarning:
    "Loading many features may slow down your browser performance",
  allFeatures: "All Features",
  downloadAllNote:
    "You can download all features using the download options below, regardless of how many are loaded for viewing",

  // New translations
  clearSelection: "Clear Selection",
  viewOnMap: "View on map",
  noGeometry: "No geometry available",
  attributeStatisticsTitle: "Attribute Statistics",
  selectAttributeFirst: "Select attribute first",
  filterByAttribute: "Filter by attribute",
  apply: "Apply",
  coordinates: "Coordinates",
  lat: "Lat",
  lng: "Lng",
  featureProperties: "Feature Properties",
  bounds: "Bounds",
  checkConsole: "Check the console for more details",
  statisticsFor: "Statistics for",
  featuresOf: "features of",
  empty: "(empty)",
  statCard: "Statistics Card",
  topValuesTitle: "Top Values",
  valueDistributionTitle: "Value Distribution",
  trueValue: "True",
  falseValue: "False",
  missingValuesTitle: "Missing Values",
  availableLayersTitle: "Available Layers",
  availableLayersDescription:
    "This WFS service contains layers. Please select one to analyze.",
  customValue: "Custom...",
  features500: "500 features",
  features1000: "1,000 features",
  features5000: "5,000 features",
  features10000: "10,000 features",
  custom: "Custom",
  wgs84: "WGS84 (EPSG:4326)",
  map: "Map",
  loaded: "Loaded",
  share: "Share",
  shareWfs: "Share this WFS",
  copied: "Copied!",
  minimumValue: "Minimum Value",
  maximumValue: "Maximum Value",
  averageValue: "Average Value",
  minimumLength: "Minimum Length",
  maximumLength: "Maximum Length",
  averageLength: "Average Length",
  mostFrequent: "Most Frequent Values",

  // New download section translations
  downloadOptions: "Download Options",
  dataFormats: "Data in various formats",
  completeData: "Complete Data",
  filteredData: "Filtered Data",
  availableFormats: "Available in multiple formats",
  includeAllFeatures: "Include all features",
  currentFilters: "Export with current filters applied",
  noFiltersApplied: "No filters currently applied",

  // New UI translations
  exploreAndAnalyze: "Explore and Analyze",
  wfsData: "WFS Data",
  toolDescription:
    "This tool helps you explore and analyze WFS (Web Feature Service) data with powerful features for visualization, analysis, and conversion. Simply enter a WFS URL below or select an example dataset to get started.",
  keyFeatures: "Key Features",
  metadataInfo: "Explore Metadata",
  interactiveMetadataInfo: "Explore Metadata",
  interactiveMetadataInfoDescription:
    "Get your data description and other information",
  mapVisualization: "Map Visualization",
  statistics: "Statistics",
  filtering: "Filtering",
  wgs84Conversion: "WGS84 Conversion",
  dataDownload: "GeoJSON Download",
  interactiveMapVisualization: "Interactive Map Visualization",
  interactiveMapDescription:
    "View WFS data spatially with interactive features",
  attributeStatisticsDescription: "Analyze data patterns and distributions",
  advancedFiltering: "Advanced Filtering",
  advancedFilteringDescription:
    "Filter data by attribute values and conditions",
  projectionConversion: "Projection Conversion",
  projectionConversionDescription:
    "Automatic conversion to WGS84 for visualization",
  formatConversion: "Format Conversion",
  formatConversionDescription:
    "GML to GeoJSON conversion for better compatibility",
  dataDownloadDescription: "Download filtered or complete datasets as GeoJSON",
  hideExampleDatasets: "Hide example datasets",
  showExampleDatasets: "Show example datasets",
  jsonFormatNotSupported: "JSON Format Not Supported",
  jsonFormatNotSupportedDesc:
    "This WFS service does not support JSON as an output format. The following features are not available:",
  mapPreviewUnavailable: "Map preview",
  dataDownloadUnavailable: "Data download",
  attributeStatisticsUnavailable: "Attribute statistics",
  limitedFunctionality:
    "You can still explore the attribute data, but spatial visualization and advanced features are limited.",
  showLessDetails: "Show Less Details",
  showMoreDetails: "Show More Details",
  loading: "Loading...",
  updatingFeatures: "Updating with {count} features...",
  loadingTimeWarning: "This may take a moment depending on the data size",
  filterOptions: "Filter Options",
  filterDescription: "Filter data by attribute values",
  dataExplorer: "Data Explorer",
  dataExplorerDescription: "Explore and analyze data attributes",
  invalidWfsUrl: "Invalid WFS URL (400 Bad Request)",
  wfsServiceNotFound: "WFS Service Not Found (404)",
  authenticationRequired: "Authentication Required",
  networkError: "Network Error",
  serverError: "Server Error",
  troubleshootingSuggestions: "Troubleshooting suggestions:",
  checkUrlTypos: "Check for typos in the URL",
  verifyValidWfs: "Verify that the URL points to a valid WFS service",
  checkServerOnline: "Make sure the server is online and accessible",
  tryAddingWfs: 'Try adding "/wfs" to the end of the URL if it\'s missing',
  tryExampleDatasets: "Try one of our example datasets instead",
  unknownError: "Failed to fetch WFS capabilities due to an unknown error",
  fetchDataError: "Failed to fetch WFS data",
  maxFeaturesUpdateError: "Failed to update data with new max features setting",
  downloadFullDataset: "Download the complete dataset in GeoJSON format",
  projectionFormat: "Coordinate System",
  totalAvailable: "Total available",
  downloadGeoJSON: "Download GeoJSON",
  filteredFeatureCount: "{count} features match your filters",
  projectionNote:
    "Filtered data is exported in the same projection as displayed on the map",
  applyFiltersFirst: "Apply filters to enable filtered data download",
  filters: "filters",
  downloadFilteredGeoJSON: "Download Filtered GeoJSON",
  matchYourFilters: "match your filters",
  // Footer translations
  projectBy: "A project of",
  conductedBy: "Conducted by",
  inCollaborationWith: "In collaboration with",
  fundedBy: "Funded by",
  privacyPolicy: "Privacy Policy",
  feedback: "Feedback",
  github: "GitHub",
  contact: "Contact",
  imprint: "Imprint",
};

// German translations
export const deTranslations: Record<TranslationKey, string> = {
  appTitle: "WFS Explorer",
  appSubtitle: "Web Feature Service Datenanalyse-Tool",
  wfsUrlLabel: "WFS URL",
  wfsUrlPlaceholder: "WFS URL eingeben",
  analyzeButton: "Laden",
  discoveringLayers: "Entdecke Layer...",
  wfsDescription:
    "Geben Sie eine gültige WFS-URL ein, um ihre Layer und Daten zu analysieren",
  errorTitle: "Fehler",
  enterWfsUrl: "Bitte geben Sie eine WFS-URL ein",
  noLayersFound: "Keine Layer im WFS-Dienst gefunden",
  corsIssueDetected: "CORS-Problem erkannt",
  corsDescription:
    "Dieser Fehler kann durch Cross-Origin Resource Sharing (CORS)-Einschränkungen verursacht werden. Der WFS-Server erlaubt möglicherweise keine Anfragen von Ihrem Browser. Versuchen Sie:",
  corsOption1: "Einen WFS-Dienst zu verwenden, der CORS unterstützt",
  corsOption2:
    "Einen Proxy-Server zu verwenden, um CORS-Einschränkungen zu umgehen",
  corsOption3:
    "Diese Anwendung auf derselben Domain wie den WFS-Dienst auszuführen",
  availableLayers: "Verfügbare Layer",
  layersDescription:
    "Dieser WFS-Dienst enthält mehrere Layer. Bitte wählen Sie einen zur Analyse aus.",
  currentLayer: "Aktueller Layer",
  layer: "Layer:",
  changeLayer: "Layer ändern",
  displayProjection: "Anzeige-Projektion:",
  sourceProjection: "Native-Projektion:",
  availableProjections: "Verfügbare Projektionen:",
  loadFullMetadata: "Mehr Metadaten laden",
  loadingMetadata: "Lade Metadaten...",
  additionalMetadata: "Zusätzliche Metadaten",
  keywords: "Schlüsselwörter:",
  contact: "Kontakt:",
  fees: "Gebühren:",
  accessConstraints: "Zugriffsbeschränkungen:",
  metadataUrl: "Metadaten-URL:",
  viewFullMetadata: "Vollständige Metadaten anzeigen",
  maxFeatures: "Maximale Anzahl zu ladender Features",
  totalFeatures: "Gesamtzahl verfügbarer Features",
  counting: "Zähle...",
  unknown: "Unbekannt",
  countNotSupported: "Zählung nicht unterstützt",
  downloadData: "Daten herunterladen",
  downloadDescription: "Laden Sie die WFS-Daten als GeoJSON herunter",
  downloading: "Wird heruntergeladen...",
  downloadGeoJSON: "GeoJSON herunterladen",
  downloadFilteredData: "Gefilterte Daten herunterladen",
  downloadFilteredDescription:
    "Laden Sie die gefilterten WFS-Daten als GeoJSON herunter",
  downloadFilteredGeoJSON: "Gefiltertes GeoJSON herunterladen",
  loadingLayerData: "Lade Layer-Daten...",
  wfsSummary: "WFS-Zusammenfassung",
  wfsSummaryDescription: "Überblick über die analysierten WFS-Daten",
  featuresLoaded: "Geladene Features",
  filteredFrom: "gefiltert aus",
  ofTotal: "von",
  attributes: "Attribute",
  geometryType: "Geometrietyp",
  usingWGS84: "Verwendung von WGS84 (EPSG:4326) Projektion",
  mapPreview: "Kartenvorschau",
  mapPreviewDescription:
    "Räumliche Visualisierung der WFS-Daten in WGS84-Projektion",
  loadingMap: "Lade Karte...",
  attributeFilters: "Attributfilter",
  activeFilters: "Aktive Filter:",
  clearAll: "Alle löschen",
  filterCondition: "Filterbedingung",
  attribute: "Attribut",
  operator: "Operator",
  value: "Wert",
  minValue: "Mindestwert",
  maxValue: "Maximalwert",
  selectAttribute: "Attribut auswählen",
  selectOperator: "Operator auswählen",
  selectValue: "Wert auswählen",
  addFilter: "Filter hinzufügen",
  clear: "Löschen",
  applyFilters: "Filter anwenden",
  attributeExplorer: "Attribut-Explorer",
  attributeStatistics: "Attribut-Statistiken",
  noDataAvailable: "Keine Daten verfügbar",
  id: "ID",
  noResults: "Keine Ergebnisse gefunden",
  showing: "Zeige",
  entries: "Einträge",
  filteredFromTotal: "gefiltert aus",
  dataType: "Datentyp",
  count: "Anzahl",
  uniqueValues: "Eindeutige Werte",
  min: "Min",
  max: "Max",
  average: "Durchschnitt",
  minLength: "Min. Länge",
  maxLength: "Max. Länge",
  avgLength: "Durchschn. Länge",
  topValues: "Häufigste Werte",
  showMore: "Mehr anzeigen",
  showLess: "Weniger anzeigen",
  valueDistribution: "Werteverteilung",
  true: "Wahr",
  false: "Falsch",
  missingValues: "Fehlende Werte",
  exampleDatasets: "Beispiel Dienste",
  exampleDatasetsDescription:
    "Probieren Sie diese Beispiel-WFS-Dienste aus, um den Analyzer zu erkunden",
  berlinCemeteries: "Berliner Friedhöfe",
  berlinCemeteriesDesc: "Friedhofsstandorte und -informationen in Berlin",
  berlinBlocks: "Berliner Blöcke",
  berlinBlocksDesc: "Stadtblöcke und statistische Gebiete in Berlin",
  berlinHikingTrails: "Berliner Wanderwege",
  berlinHikingTrailsDesc: "Wander- und Spazierwege in Berlin",
  berlinEnergyDesc: "Energieverbrauchsdaten auf PLZ, Block und Bezirksebene",
  berlinEnergy: "Energieverbrauch in Berlin",
  filter: "Filter",
  features: "Features",
  of: "von",
  language: "Sprache",
  english: "Englisch",
  german: "Deutsch",
  total: "gesamt",
  loadingMap: "Lade Karte...",

  // Projection related translations
  projectionError: "Projektionsfehler",
  projectionErrorDesc:
    "Kartenvorschau ist nicht verfügbar. Verwenden Sie stattdessen die Download-Option mit nativer Projektion.",
  projectionWarning: "Projektionswarnung",
  nativeProjection: "Native",
  nativeProjectionOnly:
    "Nur native Projektion - WGS84-Konvertierung nicht verfügbar",
  mapNotAvailable:
    "Kartenvorschau aufgrund nicht unterstütztem Projektionssystem nicht verfügbar",
  useNativeProjection: "Verwenden Sie stattdessen native Projektion",
  downloadAllFeatures: "Alle Features herunterladen",

  // Add these translations to the deTranslations object
  loadingPerformanceWarning:
    "Das Laden vieler Features kann die Browser-Leistung verlangsamen",
  allFeatures: "Alle Features",
  downloadAllNote:
    "Sie können alle Features über die Download-Optionen unten herunterladen, unabhängig davon, wie viele zum Anzeigen geladen sind",

  // New translations
  clearSelection: "Auswahl aufheben",
  viewOnMap: "Auf Karte anzeigen",
  noGeometry: "Keine Geometrie verfügbar",
  attributeStatisticsTitle: "Attribut-Statistiken",
  selectAttributeFirst: "Wählen Sie zuerst ein Attribut",
  filterByAttribute: "Nach Attribut filtern",
  apply: "Anwenden",
  coordinates: "Koordinaten",
  lat: "Breite",
  lng: "Länge",
  featureProperties: "Feature-Eigenschaften",
  bounds: "Grenzen",
  checkConsole: "Überprüfen Sie die Konsole für weitere Details",
  statisticsFor: "Statistiken für",
  featuresOf: "Features von",
  empty: "(leer)",
  statCard: "Statistik-Karte",
  topValuesTitle: "Häufigste Werte",
  valueDistributionTitle: "Werteverteilung",
  trueValue: "Wahr",
  falseValue: "Falsch",
  missingValuesTitle: "Fehlende Werte",
  availableLayersTitle: "Verfügbare Layer",
  availableLayersDescription:
    "Dieser WFS-Dienst enthält Layer. Bitte wählen Sie einen zur Analyse aus.",
  customValue: "Benutzerdefiniert...",
  features500: "500 Features",
  features1000: "1.000 Features",
  features5000: "5.000 Features",
  features10000: "10.000 Features",
  custom: "Benutzerdefiniert",
  wgs84: "WGS84 (EPSG:4326)",
  map: "Karte",
  loaded: "Geladen",
  share: "Teilen",
  shareWfs: "Diesen WFS teilen",
  copied: "Kopiert!",
  minimumValue: "Minimalwert",
  maximumValue: "Maximalwert",
  averageValue: "Durchschnittswert",
  minimumLength: "Minimale Länge",
  maximumLength: "Maximale Länge",
  averageLength: "Durchschnittliche Länge",
  mostFrequent: "Häufigste Werte",

  // New download section translations
  downloadOptions: "Download-Optionen",
  dataFormats: "Daten in verschiedenen Formaten",
  completeData: "Vollständige Daten",
  filteredData: "Gefilterte Daten",
  availableFormats: "In mehreren Formaten verfügbar",
  includeAllFeatures: "Alle Features einbeziehen",
  currentFilters: "Mit aktuellen Filtern exportieren",
  noFiltersApplied: "Keine Filter angewendet",

  // New UI translations
  exploreAndAnalyze: "Erkunden und Analysieren",
  wfsData: "WFS-Daten",
  toolDescription:
    "Dieses Tool hilft Ihnen, WFS-Daten (Web Feature Service) mit leistungsstarken Funktionen zur Visualisierung, Analyse und Konvertierung zu erkunden. Geben Sie einfach eine WFS-URL ein oder wählen Sie einen Beispieldatensatz aus.",
  keyFeatures: "Hauptfunktionen",
  metadataInfo: "Metadaten explorieren",
  interactiveMetadataInfo: "Metadaten explorieren",
  interactiveMetadataInfoDescription: "Metadaten explorieren",
  mapVisualization: "Kartenvisualisierung",
  statistics: "Statistiken",
  filtering: "Filterung",
  wgs84Conversion: "WGS84-Konvertierung",
  dataDownload: "GeoJSON-Download",
  interactiveMapVisualization: "Interaktive Kartenvisualisierung",
  interactiveMapDescription:
    "WFS-Daten räumlich mit interaktiven Funktionen anzeigen",
  attributeStatisticsDescription: "Datenmuster und -verteilungen analysieren",
  advancedFiltering: "Erweiterte Filterung",
  advancedFilteringDescription:
    "Daten nach Attributwerten und Bedingungen filtern",
  projectionConversion: "Projektionskonvertierung",
  projectionConversionDescription:
    "Automatische Konvertierung zu WGS84 für die Visualisierung",
  formatConversion: "Formatkonvertierung",
  formatConversionDescription:
    "GML zu GeoJSON-Konvertierung für bessere Kompatibilität",
  dataDownloadDescription:
    "Gefilterte oder vollständige Datensätze als GeoJSON herunterladen",
  hideExampleDatasets: "Beispieldatensätze ausblenden",
  showExampleDatasets: "Beispieldatensätze anzeigen",
  jsonFormatNotSupported: "JSON-Format nicht unterstützt",
  jsonFormatNotSupportedDesc:
    "Dieser WFS-Dienst unterstützt JSON nicht als Ausgabeformat. Die folgenden Funktionen sind nicht verfügbar:",
  mapPreviewUnavailable: "Kartenvorschau",
  dataDownloadUnavailable: "Daten-Download",
  attributeStatisticsUnavailable: "Attribut-Statistiken",
  limitedFunctionality:
    "Sie können die Attributdaten weiterhin erkunden, aber räumliche Visualisierung und erweiterte Funktionen sind eingeschränkt.",
  showLessDetails: "Weniger Details anzeigen",
  showMoreDetails: "Mehr Details anzeigen",
  loading: "Wird geladen...",
  updatingFeatures: "Aktualisiere mit {count} Features...",
  loadingTimeWarning: "Dies kann je nach Datengröße einen Moment dauern",
  filterOptions: "Filteroptionen",
  filterDescription: "Daten nach Attributwerten filtern",
  dataExplorer: "Daten-Explorer",
  dataExplorerDescription: "Datenattribute erkunden und analysieren",
  invalidWfsUrl: "Ungültige WFS-URL (400 Bad Request)",
  wfsServiceNotFound: "WFS-Dienst nicht gefunden (404)",
  authenticationRequired: "Authentifizierung erforderlich",
  networkError: "Netzwerkfehler",
  serverError: "Serverfehler",
  troubleshootingSuggestions: "Fehlerbehebungsvorschläge:",
  checkUrlTypos: "Überprüfen Sie die URL auf Tippfehler",
  verifyValidWfs:
    "Stellen Sie sicher, dass die URL auf einen gültigen WFS-Dienst verweist",
  checkServerOnline:
    "Stellen Sie sicher, dass der Server online und zugänglich ist",
  tryAddingWfs:
    'Versuchen Sie, "/wfs" am Ende der URL hinzuzufügen, falls es fehlt',
  tryExampleDatasets:
    "Probieren Sie stattdessen einen unserer Beispieldatensätze aus",
  unknownError:
    "Fehler beim Abrufen der WFS-Funktionen aufgrund eines unbekannten Fehlers",
  fetchDataError: "Fehler beim Abrufen der WFS-Daten",
  maxFeaturesUpdateError:
    "Fehler beim Aktualisieren der Daten mit neuer maximaler Feature-Anzahl",
  downloadFullDataset:
    "Laden Sie den vollständigen Datensatz im GeoJSON-Format herunter",
  projectionFormat: "Koordinatensystem",
  totalAvailable: "Insgesamt verfügbar",
  downloadGeoJSON: "GeoJSON herunterladen",
  filteredFeatureCount: "{count} Features entsprechen Ihren Filtern",
  projectionNote:
    "Gefilterte Daten werden in der gleichen Projektion exportiert, die auf der Karte angezeigt wird",
  applyFiltersFirst:
    "Wenden Sie Filter an, um den Download gefilterter Daten zu aktivieren",
  filters: "Filter",
  downloadFilteredGeoJSON: "Gefiltertes GeoJSON herunterladen",
  matchYourFilters: "entsprechen Ihren Filtern",
  // Footer translations
  projectBy: "Ein Projekt der",
  conductedBy: "Durchgeführt von der",
  inCollaborationWith: "in Zusammenarbeit mit",
  fundedBy: "Gefördert von",
  privacyPolicy: "Datenschutz",
  feedback: "Feedback",
  github: "GitHub",
  contact: "Kontakt",
  imprint: "Impressum",
};
