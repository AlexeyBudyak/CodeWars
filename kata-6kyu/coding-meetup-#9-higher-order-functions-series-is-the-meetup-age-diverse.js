function isAgeDiverse(list) {
  let gen = {'0': true};
  list.forEach(el => gen[(el.age > 99) ? 10 : ~~(el.age / 10)] = true);
  return Object.keys(gen).join('') === '012345678910';
}
