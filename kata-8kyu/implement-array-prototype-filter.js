Array.prototype.filter = function (func) {
  let arr = [];
  for(let i = 0; i < this.length; i++)
    if(func(this[i]))  arr.push(this[i]);
  return arr;
}
