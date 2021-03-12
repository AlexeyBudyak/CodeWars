function mean(lst){
  return  [lst.filter(el=>+el == el).reduce((a,b)=>a+ +b,0)/10,
           lst.filter(el=>+el != el).join('')];
}
