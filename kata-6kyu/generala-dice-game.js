function points(dice) {
  dice = dice.split('').sort();
  const sameDice = dice.filter((el,i) => el === dice[i - 1] || el === dice[i + 1]);
  const unique = 5 - sameDice.length;
  if(!unique)  return (dice[0] === dice[4]) ? 50 : 30;
  if(unique === 5 && dice.includes('5') && dice.includes('4'))  return 20;
  if(unique === 1 && sameDice[0] === sameDice[3])  return 40;
  return 0;
}
