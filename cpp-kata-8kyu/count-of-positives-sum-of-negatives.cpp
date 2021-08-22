function countPositivesSumNegatives(input) {
  if(input === null || !input.length)  return [];
  let sumPositives = 0;
  let sumNegatives = 0;
  for(let i = 0; i < input.length; i++){
    sumPositives += +(input[i] > 0);
    sumNegatives += input[i] * +(input[i] < 0);
  }
  return [sumPositives, sumNegatives];
}
