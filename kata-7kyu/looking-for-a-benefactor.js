function newAvg(arr, newavg) {
    const x = Math.ceil(newavg * (arr.length + 1) - arr.reduce((a,b)=>a+b,0));
    return x < 0 ? Null : x;
}
