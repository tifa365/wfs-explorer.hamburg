/**
 * Utility functions for calculating statistics on WFS data
 */

interface AttributeStats {
  dataType: "string" | "number" | "boolean" | "date" | "unknown"
  count: number
  uniqueCount: number
  nullCount: number
  nullPercentage: number

  // For numeric data
  min?: number
  max?: number
  sum?: number
  average?: number

  // For string data
  minLength?: number
  maxLength?: number
  avgLength?: number

  // For boolean data
  trueCount?: number
  falseCount?: number
  truePercentage?: number
  falsePercentage?: number

  // Top values
  topValues?: Array<{
    value: any
    count: number
    percentage: number
  }>
}

/**
 * Determines the data type of a value
 */
function getDataType(value: any): "string" | "number" | "boolean" | "date" | "unknown" {
  if (value === null || value === undefined) {
    return "unknown"
  }

  if (typeof value === "string") {
    // Check if it's a date
    const dateValue = new Date(value)
    if (!isNaN(dateValue.getTime()) && value.match(/^\d{4}-\d{2}-\d{2}|^\d{4}\/\d{2}\/\d{2}/)) {
      return "date"
    }
    return "string"
  }

  if (typeof value === "number") {
    return "number"
  }

  if (typeof value === "boolean") {
    return "boolean"
  }

  return "unknown"
}

/**
 * Calculates statistics for a specific attribute in the WFS data
 */
export function calculateAttributeStats(features: any[], attributeName: string): AttributeStats {
  // Initialize stats object
  const stats: AttributeStats = {
    dataType: "unknown",
    count: features.length,
    uniqueCount: 0,
    nullCount: 0,
    nullPercentage: 0,
  }

  // Count null/undefined values
  stats.nullCount = features.filter(
    (f) => f.properties[attributeName] === null || f.properties[attributeName] === undefined,
  ).length

  stats.nullPercentage = (stats.nullCount / stats.count) * 100

  // Get non-null values
  const values = features.map((f) => f.properties[attributeName]).filter((v) => v !== null && v !== undefined)

  if (values.length === 0) {
    return stats
  }

  // Determine data type from the first non-null value
  stats.dataType = getDataType(values[0])

  // Calculate unique values
  const uniqueValues = new Set(values.map((v) => String(v)))
  stats.uniqueCount = uniqueValues.size

  // Calculate type-specific statistics
  if (stats.dataType === "number") {
    const numericValues = values.map((v) => Number(v))
    stats.min = Math.min(...numericValues)
    stats.max = Math.max(...numericValues)
    stats.sum = numericValues.reduce((sum, val) => sum + val, 0)
    stats.average = stats.sum / numericValues.length
  } else if (stats.dataType === "string") {
    const stringValues = values.map((v) => String(v))
    stats.minLength = Math.min(...stringValues.map((s) => s.length))
    stats.maxLength = Math.max(...stringValues.map((s) => s.length))
    const totalLength = stringValues.reduce((sum, s) => sum + s.length, 0)
    stats.avgLength = totalLength / stringValues.length
  } else if (stats.dataType === "boolean") {
    stats.trueCount = values.filter((v) => v === true || v === "true").length
    stats.falseCount = values.filter((v) => v === false || v === "false").length
    stats.truePercentage = (stats.trueCount / values.length) * 100
    stats.falsePercentage = (stats.falseCount / values.length) * 100
  }

  // Calculate all values for statistics (not just top 5)
  const valueCounts: Record<string, number> = {}
  values.forEach((value) => {
    const key = String(value)
    valueCounts[key] = (valueCounts[key] || 0) + 1
  })

  stats.topValues = Object.entries(valueCounts)
    .map(([value, count]) => ({
      value,
      count,
      percentage: (count / values.length) * 100,
    }))
    .sort((a, b) => b.count - a.count)

  return stats
}
