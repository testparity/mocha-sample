function applyDiscount(subtotal, vip = false) {
  const rate = vip ? 0.2 : 0.1;
  return Number((subtotal * (1 - rate)).toFixed(2));
}

module.exports = { applyDiscount }
