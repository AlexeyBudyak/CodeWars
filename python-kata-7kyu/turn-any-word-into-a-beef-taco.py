def tacofy(word):
    staf = {'t': 'tomato', 'l': 'lettuce', 'c': 'cheese', 'g':'guacamole', 's':'salsa'}
    taco = ['shell']
    for el in word.lower():
        if el in 'aeoiu':
            taco.append('beef')
        if el in staf:
            taco.append(staf[el])
    return taco +['shell']
