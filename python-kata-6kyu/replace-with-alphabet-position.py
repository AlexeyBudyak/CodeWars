def alphabet_position(text):
    result = ''
    abc = 'abcdefghijklmnopqrstuvwxyz'
    for el in text.lower():
        if el in abc:
            result+= ' ' + str(abc.index(el) + 1)
    return result[1:]
