function solution(number){
  console.log(number);
  const n=[['','I','II','III','IV','V','VI','VII','VIII','IX'],
           ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
           ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
           ['','M','MM','MMM']];
  return (number+'').split('').reverse().map((el,i)=>n[i][el]).reverse().join('');
}
