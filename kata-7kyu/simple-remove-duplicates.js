function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
