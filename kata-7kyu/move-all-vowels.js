function moveVowel(input) {
  return input.split('').filter(el => !'aeiou'.includes(el)).join('')
        +input.split('').filter(el => 'aeiou'.includes(el)).join('')
}
