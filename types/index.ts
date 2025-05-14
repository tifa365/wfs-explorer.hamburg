export interface WfsCapabilities {
  version: string
  featureTypes: FeatureType[]
  serviceIdentification?: {
    title?: string
    abstract?: string
    keywords?: string[]
    serviceType?: string
    serviceTypeVersion?: string
    fees?: string
    accessConstraints?: string
  }
  serviceProvider?: {
    providerName?: string
    providerSite?: string
    contactInfo?: {
      phone?: string
      address?: string
      email?: string
    }
  }
}

export interface FeatureType {
  name: string
  title?: string
  abstract?: string
  keywords?: string[]
  defaultSRS?: string
  otherSRS?: string[]
  outputFormats?: string[]
  boundingBox?: BoundingBox
}

export interface BoundingBox {
  crs: string
  minx: number
  miny: number
  maxx: number
  maxy: number
}

export interface FeatureProperty {
  name: string
  type: string
  value: any
}

export interface Feature {
  id: string
  properties: Record<string, any>
  geometry?: any
  bbox?: number[]
}

export interface AttributeFilter {
  propertyName: string
  operator: string
  value: string | number | boolean
}

export interface SpatialFilter {
  type: "BBOX" | "INTERSECTS" | "WITHIN" | "CONTAINS"
  geometry: any
}

export interface DownloadOptions {
  format: "GeoJSON" | "CSV" | "Shapefile" | "KML"
  includeGeometry: boolean
  selectedProperties: string[]
}

export interface ProjectionDefinition {
  code: string
  name: string
  proj4def: string
  description?: string
}

export interface LayerMetadata {
  name: string
  title?: string
  abstract?: string
  keywords?: string[]
  defaultSRS?: string
  otherSRS?: string[]
  boundingBox?: BoundingBox
  featureCount?: number
  properties?: {
    name: string
    type: string
    description?: string
  }[]
}

export interface AttributeStats {
  propertyName: string
  type: string
  count: number
  uniqueValues?: number
  min?: number | string
  max?: number | string
  average?: number
  median?: number
  mode?: any
  histogram?: Record<string, number>
}

export interface ExampleDataset {
  name: string
  url: string
  description: string
  icon?: string
}

export interface Language {
  code: string
  name: string
  flag?: string
}
