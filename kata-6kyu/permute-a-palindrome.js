function permuteAPalindrome (input) { 
  return input.length % 2 === 
    'abcdefghijklmnopqrstuvwxyz'.split('')
    .reduce((acc, cur)=> 
            acc + input.split('').filter(el => el === cur).length % 2, 0);;
}
