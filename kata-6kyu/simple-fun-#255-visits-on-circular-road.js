const shortestWay = (n, a, b) =>  
  Math.min(Math.abs(b - a), Math.abs(n + a - b), Math.abs(n + b - a)); 


function visitsOnCircularRoad(n, visitsOrder) {
  return [1, ...visitsOrder].reduce((l, x, i) => l + shortestWay(n, x, visitsOrder[i] || x), 0);
}
