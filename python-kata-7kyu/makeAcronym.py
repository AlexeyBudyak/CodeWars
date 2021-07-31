def make_acronym(phrase):
    print(phrase)
    if type(phrase) != str:
        return 'Not a string'
    acr = ''
    for word in phrase.split(' '):
        for el in word:
            if el in '0123456789':
                return 'Not letters'
        if len(word):
            acr+= word[0].upper()
    return acr
