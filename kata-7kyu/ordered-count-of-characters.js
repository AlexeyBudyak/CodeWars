var orderedCount = function (text) {
  let obj = {};
  text.split('').forEach(el=> obj[el] ? obj[el]++ : obj[el] = 1);
  return text.split('').filter((el,i,arr)=>arr.indexOf(el)===i).map(el=>[el,obj[el]]);
}
