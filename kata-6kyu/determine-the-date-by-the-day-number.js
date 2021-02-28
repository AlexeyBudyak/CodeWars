function getDay(day, isLeap){
  const mName = ['January', 'February', 'March', 'April', 'May', 
             'June', 'July', 'August','September', 'October', 'November','December', 'wrong day'];
  const d = [31 , 59 , 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  let m;
  if(day === 60 && isLeap)  return 'February, 29';
  if(day > 60 && isLeap)  day--;
  for(m = 0; m < 12 && d[m] < day; m++);
  return m === 12 ? 'wrong day' : (mName[m] + ', ' + (day - (d[m-1] || 0)));
}
