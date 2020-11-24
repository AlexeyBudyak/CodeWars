function iTri(s){
  if(!s)  return 'Starting Line... Good Luck!';
  if(s >= 140.6)  return `You're done! Stop running!`;
  let obj = {};
  let d = (s < 130.6) ? (140.6 - s).toFixed(2) + ' to go!' : 'Nearly there!';
  if(s < 2.4)
    obj.Swim = d;
  else if(s < 114.4)
    obj.Bike = d;
  else
    obj.Run = d;

  return obj;
}
