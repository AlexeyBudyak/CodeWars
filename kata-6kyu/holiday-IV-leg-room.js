function legRoom (a, b){
  let legLen = Math.floor(a * 0.55)
  let legRoom = b.replace(/[aeiou]/gi, '').length * 2
  if(b.includes('00')) return 'Jackpot!'
  else if(legRoom > legLen * 0.25) return 'super comfy'
  else if(legRoom < legLen * 0.15) return 'ouch'
  else return 'comfortable'
}
