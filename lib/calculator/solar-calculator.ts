export type PropertyType = 'home' | 'business' | 'industry'
export interface SolarInputs { bill: number; tariff: number; propertyType: PropertyType; roofArea?: number }
export interface SolarResult { capacity: number; annualGeneration: number; monthlySavings: number; annualSavings: number; systemCost: number; payback: number; twentyYearSavings: number }
const assumptions = { generationPerKw: 1350, costPerKw: 62000, maintenanceRate: 0.01 }
export function calculateSolar({ bill, tariff, propertyType, roofArea = 0 }: SolarInputs): SolarResult {
  const usage = Math.max(0, bill / Math.max(tariff, 1))
  const propertyFactor = propertyType === 'industry' ? 1.15 : propertyType === 'business' ? 1.08 : 1
  const capacityByBill = (usage * 12 * propertyFactor) / assumptions.generationPerKw
  const capacityByRoof = roofArea > 0 ? roofArea / 100 : 99
  const capacity = Math.max(1, Math.min(100, Math.round(Math.min(capacityByBill, capacityByRoof) * 2) / 2))
  const annualGeneration = Math.round(capacity * assumptions.generationPerKw)
  const annualSavings = Math.round(Math.min(bill * 12, annualGeneration * tariff * 0.9))
  const systemCost = Math.round(capacity * assumptions.costPerKw)
  const payback = Math.round((systemCost / Math.max(annualSavings, 1)) * 10) / 10
  return { capacity, annualGeneration, monthlySavings: Math.round(annualSavings / 12), annualSavings, systemCost, payback, twentyYearSavings: Math.max(0, annualSavings * 20 - systemCost - systemCost * assumptions.maintenanceRate * 20) }
}
