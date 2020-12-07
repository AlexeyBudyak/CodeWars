function multArr ( arr1, arr2){
  const arr = [];
  for(a in arr1)  for(b in arr2)  arr.push(arr1[a] + arr2[b]);
  return arr;
}

function getPINs(observed) {
  const codes = [['0', '8'],
                 ['1', '2', '4'],
                 ['1', '2', '3', '5'],
                 ['2', '3', '6'],
                 ['1', '4', '5', '7'],
                 ['2', '4', '5', '6', '8'],
                 ['3', '5', '6', '9'],
                 ['4', '7', '8'],
                 ['0', '5', '7', '8', '9'],
                 ['6', '8', '9']];
  let nn = [...codes[observed[0]]];
  for( let i = 1; i < observed.length;i++)
    nn = [...multArr(nn, codes[observed[i]])];

  return nn;
}
