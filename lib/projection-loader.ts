import { projectionDefs } from "./projection-defs"

/**
 * Loads projection definitions from the proj4js-definitions package
 * @param proj4 The proj4 instance to register the definitions with
 * @param projectionCode The projection code to load
 * @returns True if the projection was loaded, false otherwise
 */
export function loadProjection(proj4: any, projectionCode: string): boolean {
  // Normalize the projection code
  const normalizedCode = normalizeProjectionCode(projectionCode)

  // Check if the projection is already defined
  if (proj4.defs[normalizedCode]) {
    return true
  }

  // Check if we have the definition in our local collection
  if (projectionDefs[normalizedCode]) {
    proj4.defs(normalizedCode, projectionDefs[normalizedCode])
    console.log(`Added definition for ${normalizedCode} from local collection`)
    return true
  }

  // Try to load from proj4js-definitions package if available
  try {
    // This would be replaced with actual code to load from the package
    // For now, we'll just return false
    console.warn(`No definition available for ${normalizedCode}`)
    return false
  } catch (error) {
    console.error(`Error loading projection ${normalizedCode}:`, error)
    return false
  }
}

/**
 * Loads multiple projection definitions
 * @param proj4 The proj4 instance to register the definitions with
 * @param projectionCodes Array of projection codes to load
 * @returns Array of projection codes that were successfully loaded
 */
export function loadProjections(proj4: any, projectionCodes: string[]): string[] {
  const loadedProjections: string[] = []

  for (const code of projectionCodes) {
    if (loadProjection(proj4, code)) {
      loadedProjections.push(normalizeProjectionCode(code))
    }
  }

  return loadedProjections
}

/**
 * Ensures essential projections are loaded
 * @param proj4 The proj4 instance to register the definitions with
 */
export function ensureEssentialProjections(proj4: any): void {
  // Make sure WGS84 and Web Mercator are always available
  const essentialProjections = ["EPSG:4326", "EPSG:3857"]

  for (const code of essentialProjections) {
    if (!proj4.defs[code] && projectionDefs[code]) {
      proj4.defs(code, projectionDefs[code])
      console.log(`Added essential projection ${code}`)
    }
  }
}

/**
 * Normalizes a projection code to a standard format
 * @param code The projection code to normalize
 * @returns The normalized projection code
 */
export function normalizeProjectionCode(code: string): string {
  // Handle URN format: urn:ogc:def:crs:EPSG:6.9:25833
  if (code.startsWith("urn:ogc:def:crs:EPSG:")) {
    const parts = code.split(":")
    const epsgCode = parts[parts.length - 1]
    return `EPSG:${epsgCode}`
  }

  // Handle http format: http://www.opengis.net/gml/srs/epsg.xml#25833
  if (code.startsWith("http://www.opengis.net/gml/srs/epsg.xml#")) {
    const epsgCode = code.split("#").pop()
    return `EPSG:${epsgCode}`
  }

  // Handle http format: http://www.opengis.net/def/crs/EPSG/0/3035
  if (code.startsWith("http://www.opengis.net/def/crs/EPSG/")) {
    const parts = code.split("/")
    const epsgCode = parts[parts.length - 1]
    return `EPSG:${epsgCode}`
  }

  return code.toUpperCase()
}
