function convert(degrees) {
  let result = [Math.floor(degrees), Math.floor(degrees * 60 % 60), Math.round(degrees * 3600 % 60)];
  if(!result[2])  {
    result.pop();
    if(!result[1])  result.pop();
  }
  return result;
}
