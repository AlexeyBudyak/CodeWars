function solution(list){
  return list.map((el,i)=> (el === list[i-1]+1 && el === list[i+1]-1) ? '-' : el)
    .filter((el,i, arr) => (el !== '-' || arr[i - 1] !== '-')).join(',').replace(/,-,/g,'-');
}
