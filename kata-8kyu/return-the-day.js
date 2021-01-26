function whatday(num) { 
  return (num < 1 || num > 7) ? "Wrong, please enter a number between 1 and 7"
    : ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'][num - 1] + 'day';
}
