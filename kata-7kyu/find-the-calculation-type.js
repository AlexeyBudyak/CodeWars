function calcType(a, b, res) {
  let calc = {addition: (a,b) => a + b,
              multiplication: (a,b) => a * b,
              subtraction: (a,b) => a - b,
              division: (a,b) => a / b};
  act = ["addition", "multiplication", "subtraction", "division"];
  for(let i in act)
    if(calc[act[i]](a,b) === res)
      return act[i];
}
