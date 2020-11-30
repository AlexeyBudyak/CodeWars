function findOutlier(integers){
  const odd = !!((integers[0] % 2) ** 2 + (integers[1] % 2) ** 2 + (integers[2] % 2) ** 2 > 1);
  return integers.reduce( (a,b) => a +  +(!(b % 2) === odd) * b , 0);
}
