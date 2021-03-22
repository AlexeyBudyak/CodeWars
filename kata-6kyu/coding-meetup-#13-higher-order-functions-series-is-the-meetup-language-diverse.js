function isLanguageDiverse(list) {
  const lang = {};
  list.forEach(el => lang[el.language] ? lang[el.language]++ : lang[el.language] = 1);
  return Math.max(...Object.values(lang)) <= Math.min(...Object.values(lang)) * 2;
}
