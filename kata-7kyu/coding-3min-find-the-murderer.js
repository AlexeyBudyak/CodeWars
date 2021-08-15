function sc(said,suspects){
  murder = []
  for(si in suspects){
    let image = ''
    for(let i = 0; i < suspects[si].length; i++)
      if(said.length <= i || said[i] === '~' || said[i].toLowerCase() === suspects[si][i].toLowerCase())
        image+= suspects[si][i]
    if(image === suspects[si] && said.length <= suspects[si].length)
      murder.push(suspects[si])
  }
  return murder.join(',')  
}
