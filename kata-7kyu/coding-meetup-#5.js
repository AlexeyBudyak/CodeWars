function countLanguages(list) {
  let lang = {};
  for( let i = 0; i < list.length; i++){
      if(lang[list[i].language] === undefined)  lang[list[i].language] = 1;
                                          else  lang[list[i].language]++;
  }
  return lang;
}
