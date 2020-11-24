function countDevelopers(list) {
  return list.filter(el => el.continent === 'Europe' && el.language === 'JavaScript').length;
}
