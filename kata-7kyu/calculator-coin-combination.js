function coinCombo (cents) {
  const coins = [25, 10, 5, 1];
  let result = [];
  for(let i in coins)
    result.push(Math.floor((cents - result.reduce((sum, x, j) => sum + x * coins[j], 0))/ coins[i]) )
  return result.reverse();
}
