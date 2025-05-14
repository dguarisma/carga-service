interface PriceCalculatorProps {
  distance: number
  cargoType: "light" | "medium" | "heavy"
}

export function calculatePrice({ distance, cargoType }: PriceCalculatorProps) {
  const baseRates = {
    light: 1.5, // per km
    medium: 2.0, // per km
    heavy: 2.5, // per km
  }

  const basePrice = distance * baseRates[cargoType]
  return basePrice
}
