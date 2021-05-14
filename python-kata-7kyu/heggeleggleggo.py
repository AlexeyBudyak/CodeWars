def heggeleggleggo(word):
    s = ''
    for letter in word:
        s+= letter
        if letter.lower() not in ' aeuio': s+='egg'
    return s
