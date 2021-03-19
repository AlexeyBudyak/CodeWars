//return the winner's army as string, 'Draw' or 'Peace'
function battleCodes(armyLetters, armyNumbers) {
  const decreaseCode = (c, numAtack) => String.fromCharCode(c.charCodeAt(0) - numAtack);
  if(armyLetters === '' || armyNumbers === '')  return 'Peace';
  armyLetters = armyLetters.split('').reverse();
  armyNumbers = armyNumbers.split('');
  do{
    const numAtack = +armyNumbers[0];
    armyNumbers[0]-= (armyLetters[0].charCodeAt(0) - 96);
    if(armyNumbers[0] < 1)  armyNumbers.shift();
    
    armyLetters[0] = decreaseCode(armyLetters[0], numAtack);
    if(armyLetters.length > 1)
      armyLetters[1] = decreaseCode(armyLetters[1], numAtack);
    armyLetters = armyLetters.filter(el => el.charCodeAt(0) >= 97)
  }while(armyLetters.length && armyNumbers.length)
    if(armyLetters.length === armyNumbers.length) return "Draw";
  return [...armyNumbers, ...armyLetters.reverse()].join('');
}
