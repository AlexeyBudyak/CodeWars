function getAverageAge(list) {
  return Math.round(list.reduce((sum,person)=> sum + person.age,0) / list.length);
}
