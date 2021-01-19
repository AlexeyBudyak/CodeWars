function looseChange(cents){
  let change = {};
  cents = (cents < 0)  ? 0 : ~~cents;
  change['Quarters'] = ~~(cents / 25);
  change['Dimes'] = ~~((cents - change['Quarters'] * 25)/10);
  change['Nickels'] = ~~((cents - change['Quarters'] * 25 - change['Dimes'] * 10)/5);
  change['Pennies'] = cents % 5;
  return change;
}
