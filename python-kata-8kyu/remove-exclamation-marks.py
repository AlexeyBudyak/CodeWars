def remove_exclamation_marks(s):
    result = ''
    for el in s:
        if el != '!':
            result+= el
    return result
