function findUnique(arr){
  let nums = [];
  nums.push(arr.filter(el=>el === ~~el));
  nums.push(arr.filter(el=>el !== ~~el));
  nums.push(arr.filter(el=>el > 0));
  nums.push(arr.filter(el=>el < 0));
  nums.push(arr.filter(el=>el % 2));
  nums.push(arr.filter(el=>el % 2 === 0));
  nums.push(arr.filter(el=>arr.indexOf(el) === arr.lastIndexOf(el)));
  return nums.filter(el => el.length === 1)[0][0];
}
