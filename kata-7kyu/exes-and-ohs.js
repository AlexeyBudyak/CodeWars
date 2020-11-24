function XO(str) {
    let arr = str.toLowerCase().split('');
    return (arr.reduce((acc,curr)=>acc += curr==='x' ,0) === 
       arr.reduce((acc,curr)=>acc += curr==='o' ,0))
}
