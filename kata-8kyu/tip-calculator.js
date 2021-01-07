function calculateTip(amount, rating) {
  const rate = {terrible: 0, poor: 0.05, good: 0.1, great: 0.15, excellent: 0.2}
  const tips = Math.ceil(amount * rate[rating.toLowerCase()]);
  return isNaN(tips) ? 'Rating not recognised' : tips;
}
