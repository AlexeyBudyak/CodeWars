function findOddNames(list) {
  return list.filter(el => 
         el.firstName.split('').reduce((sum, char) => sum + char.charCodeAt(0),0) % 2);
}
