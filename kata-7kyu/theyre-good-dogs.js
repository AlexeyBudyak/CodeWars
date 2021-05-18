function weRateDogs(str, rating){
  var index = str.indexOf("/");
  return str.substring(0,index-1) + rating + str.substring(index);
}
