function slot(s){
  if(s === '!!!!!' || s === '?????')  return 1000;
  if(["!!!!?","?!!!!","????!","!????"].includes(s))  return 800;
  if(["!!!??","??!!!","???!!","!!???"].includes(s))   return 500;
  if(s.includes('!!!') || s.includes('???'))  return 300;
  if(["!!??!","??!!?",'!??!!','?!!??',"!!?!!","??!??"].includes(s))   return 200;
  if(s.includes('!!') || s.includes('??'))  return 100;
  return 0;
}