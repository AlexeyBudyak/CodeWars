function caseUnification(s) {
  return s.replace(/[a-z]/g,"").length > s.length/2 ? s.toUpperCase() : s.toLowerCase(); 
}
