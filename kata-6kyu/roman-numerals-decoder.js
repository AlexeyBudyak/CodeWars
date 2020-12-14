function solution(roman){
  const replacer = [['IV', 'IIII'],['IX','VIIII'],['XL','XXXX'],['XC','LXXXX'],['CD','CCCC'],['CM','DCCC']];
  const values = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
  replacer.forEach(el => roman = roman.replace(el[0],el[1]));
  return roman.split('').reduce((n,r)=> n + values[r],0);
}
