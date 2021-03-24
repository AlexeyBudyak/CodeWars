var Calculator = {
 average: function(...arr) {
  return arr.reduce((a,b)=>a+b,0)/arr.length || 0;
 }
};
