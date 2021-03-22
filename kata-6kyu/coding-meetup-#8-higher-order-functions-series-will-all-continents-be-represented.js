 function allContinents(list) {
  let cont = {};
  list.forEach(el => cont[el.continent] = true );
  return Object.keys(cont).length === 5;
}
