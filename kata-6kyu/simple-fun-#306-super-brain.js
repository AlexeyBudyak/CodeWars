function revolve (arr, n){
  for(let i = 0; i < n; i++){
    let x = arr.shift()
    arr.push(x)
  }
  return arr
}

function superBrain(arr,op){
  func = {
          'ADD':  (arr, x) => arr.map((el,i)=> (i >= x[0] - 1 && i < x[1]) ? el + x[2] : el),
          'REVERSE': (arr, x) => [...arr.slice(0, x[0] - 1),
                                  ...arr.slice(x[0] -1, x[1]).reverse(),
                                  ...arr.slice(x[1])],
          'REVOLVE': (arr, x) => [...arr.slice(0, x[0] - 1),
                                  ...revolve(arr.slice(x[0] -1, x[1]), x[2]),
                                  ...arr.slice(x[1])],
          'INSERT': (arr, x) => [...arr.slice(0, x[0] - 1), x[1],
                                 ...arr.slice(x[0] - 1)],
          'DELETE' : (arr, x) => [...arr.slice(0, x[0] - 1),
                                 ...arr.slice(x[0])],          
         
         }
  for(let i = 0; i< op.length; i++) {
    let [act, ...x] = op[i].split(' ').map((el, i) => i ? +el : el)
    if (act == 'MIN') 
      return  arr.slice(x[0] - 1, x[1]).reduce((min,x)=> x < min ? x : min)
    arr = func[act](arr,x)
  }   
}
