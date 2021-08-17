function sc(arr){
  counts = {}
  arr.forEach(subArr => subArr.forEach(el=> counts[el] ? counts[el]++ : counts[el] = 1))
  max = Math.max(...Object.values(counts))
  return arr.map(subArr => subArr.filter(el=>counts[el] < max))
}
