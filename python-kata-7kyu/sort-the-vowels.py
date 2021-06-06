def sort_vowels(s):
    result = ''
    if type(s) != str:  return ''
    for el in s:
        result+= ('|' + el if el.lower() in 'aeoui' else el + '|') + '\n'
    return result[:-1]
