function timeDecode(str){
  const [hr,min] = str.split(':');
  return +hr + min / 100;
}

function openingTimes(str) {
  const schedule = { Monday:  {open: '08:00', close: '20:00', next: 'Tuesday'},
                     Tuesday:  {open: '08:00', close: '20:00', next: 'Wednesday'},
                     Wednesday: {open: '08:00', close: '20:00', next: 'Thursday'},
                     Thursday: {open: '08:00', close: '20:00', next: 'Friday'},
                     Friday: {open: '08:00', close: '20:00', next: 'Saturday'},
                     Saturday: {open: '10:00', close: '18:00', next: 'Sunday'},
                     Sunday: {open: '12:00', close: '16:30', next: 'Monday'}}
  let [day, time] = str.split(' ');
  let [hr, min] = time.split(':');
  day = day[0].toUpperCase() + day.substring(1).toLowerCase();
  if(hr > 23 || min > 59 || !schedule[day])  return 'Invalid time!';
  const isOpen = (time > schedule[day].open && time < schedule[day].close );
  if(isOpen)  return 'Library closes at ' + schedule[day].close;
  if(time < schedule[day].open)  return 'Library opens: today ' + schedule[day].open;
  return 'Library opens: ' + schedule[day].next + ' ' + schedule[schedule[day].next].open;
}
