function sort(items){
  for(let i = 0; i < items.length - 1; i++)
    if(items[i+1] < items[i])
      [items[i],items[i+1]] = [items[i+1],items[i]], i = -1;
  return items;
}
