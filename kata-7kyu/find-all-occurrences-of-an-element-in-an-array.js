const findAll = (array, n) => {
  return array.map((el,i) => n === el ? i : -1).filter(el => el !== -1);
}
