function validateUsr(username) {
  return username.split('').every(el => '0123456789_abcdefghijklmnopqrstuvwxyz'.includes(el))
         && username.length >= 4 && username.length <= 16;
}
