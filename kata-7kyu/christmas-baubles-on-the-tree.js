function baublesOnTree(baubles, branches){
  if(!branches)  return "Grandma, we will have to buy a Christmas tree first!";
  return Array(branches).fill(0)
    .map((el,i)=>~~(baubles/branches) + +(baubles % branches > i));
}
