function separateTypes(input) {
  let obj = {};
  input.forEach(el=>obj[typeof el] ? obj[typeof el].push(el) : obj[typeof el] = [el] );
  return obj;
}
