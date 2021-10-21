function bitsBattle(num) {
  let s = [0,0];
  for(let i in num){
    let num_bin = num[i].toString(2);
    let rule = num_bin[num_bin.length - 1];
    s[rule]+= num_bin.split(rule).length - 1
  }
  return s[0] === s[1] ? 'tie' : s[0] > s[1] ? 'evens win' : 'odds win';
}
