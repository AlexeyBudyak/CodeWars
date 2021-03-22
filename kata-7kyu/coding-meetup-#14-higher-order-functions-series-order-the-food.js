function orderFood(list) {
  let food = {};
  list.forEach(el => food[el.meal] ? food[el.meal]++ : food[el.meal] = 1);
  return food;
}
