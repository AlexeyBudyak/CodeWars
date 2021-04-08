function gps(s, x) {
    return x.length > 1 ? Math.max(...x.slice(0,-1).map((el,i)=>(x[i+1]-el) * 3600 / s)) : 0
}
