function testResult(array) {
  let obj = [  +(array.reduce((a,b) => a + b) / array.length).toFixed(3),
          {
            h: array.filter((x) => x > 8).length,
            a: array.filter((x) => x === 7 || x === 8).length,
            l: array.filter((x) => x < 7).length
          }
          ];
  if (obj[1].h === array.length)  obj.push("They did well");
  return obj;
}
