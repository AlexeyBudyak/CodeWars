const sumArr = ([a,b,c,d]) => a * a + b * b + c * c + d * d;

const fillNx = (arr, i, n) => {
  arr[i-1]--;
  for(let j = i; j < 4; j++)  arr[j] = 1;
   while(i < 4)
    arr[i++] = Math.floor((n - sumArr(arr) + 1) ** 0.5);
  return arr;
}

function find4Number(n){
  let arr = [1,1,1,1];
  let index = 2;
  for(let i = 0; i < 4; i++)
    arr[i] = Math.floor((n - sumArr(arr) + 1) ** 0.5)

  while(sumArr(arr) !== n){
    switch(index){
        case 0:  [arr, index] = [fillNx(arr, 1, n), 2];
                break;
        case 1: [arr, index] = (arr[1] < arr[2]) ? [arr, arr[2] <= arr[3] ? 0 : 2]
                                                 : [fillNx(arr, 2, n), 2];
                break;
        case 2: [arr, index] = (arr[2] <= arr[3]) ? [arr, 1] : [fillNx(arr, 3, n), 2];
                break;
    }
  } 
  return  arr;
}
