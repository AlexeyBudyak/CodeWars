function bite(thing){
  console.log(thing);
  if(thing.race === 'human') thing.race = 'zombie'
  return thing;
}
