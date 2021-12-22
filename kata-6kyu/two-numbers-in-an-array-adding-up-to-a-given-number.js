function hasPair(A, sum){
  let min = A[0]
  let max = A[A.length-1]
  A = A.filter((el) => el + min <= sum && el + max >= sum )
  for(i = 0; i < A.length - 1; i++)
    for(j = i + 1; j < A.length; j++)
      if(A[i] + A[j] === sum) return true;
  return false;
}
