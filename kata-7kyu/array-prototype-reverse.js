Array.prototype.reverse = function() {
  let original = this.splice(0); 
  let arr = [];
  for(let i in original) this.unshift(original[i]);
  return this;
};
