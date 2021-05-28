function last(list){
  if(arguments.length > 1) list = [...arguments]
  return list[list.length -1] || list;
}
