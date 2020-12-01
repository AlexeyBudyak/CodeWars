function removeRotten(bagOfFruits){
  if(!bagOfFruits)  return [];
  if(!bagOfFruits.length)  return [];
  return bagOfFruits.join(',').toLowerCase().replace(/rotten/g,'').split(',');
}
