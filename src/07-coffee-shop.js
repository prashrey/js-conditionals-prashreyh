/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */

export function calculateCoffeePrice(size, type, extras = {}) {
  const sizes = ["small", "medium", "large"];
  const addOns = ["regular", "latte", "cappuccino", "mocha"];
  if (!sizes.includes(size)) return -1;
  if (!addOns.includes(type)) return -1;

  let basePrice,
    addOnPrice,
    extrasPrice = 0;

  switch (size) {
    case "small":
      basePrice = 3.0;
      break;
    case "medium":
      basePrice = 4.0;
      break;
    default:
      basePrice = 5.0;
      break;
  }
  switch (type) {
    case "latte":
      addOnPrice = 1.0;
      break;
    case "cappuccino":
      addOnPrice = 1.5;
      break;
    case "mocha":
      addOnPrice = 2.0;
      break;
    default:
      addOnPrice = 0;
  }

  extrasPrice = extrasPrice + (extras.whippedCream ? 0.5 : 0);
  extrasPrice = extrasPrice + (extras.extraShot ? 0.75 : 0);

  return basePrice + addOnPrice + extrasPrice;
}
