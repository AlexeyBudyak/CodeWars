function howManySmaller(arr,n){
  const nums = arr.map((el => +el.toFixed(2)));
  return nums.reduce((acc, curr) => acc + +(curr < n), 0);
}
