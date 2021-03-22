function findSenior(list) {
  const age = list.reduce((max, curr) => Math.max(max, curr.age),0)
  return list.filter(el => el.age === age);
}
