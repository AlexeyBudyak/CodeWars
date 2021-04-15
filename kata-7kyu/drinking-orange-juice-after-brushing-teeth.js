function calcWaitForOJ(flavor, amount) {
  const time = Math.round({'Minty-Fresh': 37, 'Lemon-Sage': 15, 'Fruit-Fusion': 24}[flavor] * amount);
  return `It\'s safe to drink OJ ${time ? 'after ' + time + ' minutes' : 'now'}.`
}
