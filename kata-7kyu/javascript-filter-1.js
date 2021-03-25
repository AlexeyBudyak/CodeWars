function searchNames( logins ){
  return logins.filter(el=> el[0][el[0].length-1]==='_');
}
