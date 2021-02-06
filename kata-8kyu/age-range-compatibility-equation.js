function datingRange(age){
  const min = age > 14 ? ~~(age / 2) + 7 : age - Math.ceil(age / 10);
  const max = age > 14 ? (age - 7) * 2 : age + ~~(age / 10);
  return min + '-' + max;
}
