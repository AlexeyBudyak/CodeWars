Array.prototype.even = function(){
  return this.filter(el => el % 2 === 0 && Number.isInteger(el) )
}

Array.prototype.odd = function(){
  return this.filter(el => el % 2 & Number.isInteger(el))
}

Array.prototype.under = function(x){
 return this.filter(el => el < x && Number.isInteger(el))
}

Array.prototype.over = function(x){
  return this.filter(el => el > x && Number.isInteger(el))
}

Array.prototype.inRange = function(min,max){
  return this.filter(el => el >= min && el <= max && Number.isInteger(el))
}
