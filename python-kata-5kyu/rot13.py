def rot13(message):
  abc =  'abcdefghijklmnopqrstuvwxyz'
  code = 'nopqrstuvwxyzabcdefghijklm'
  abc+= abc.upper()
  code+= code.upper()
  result = ''
  for x in message:
    if x in abc:
        result+= code[abc.index(x)]
    else:
        result+= x
  return result 
