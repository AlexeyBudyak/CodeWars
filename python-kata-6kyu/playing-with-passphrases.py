def play_pass(s, n):
    abc = 'abcdefghijklmnopqrstuvwxyz'
    abc+= abc
    result = ''
    for i,c in enumerate(s):
        if c.isalpha():
            c = abc[abc.index(c.lower())+n]
            result+= [c.upper(),c][i%2]
        elif c.isdigit():
            result += str(9 - int(c))
        else: 
            result+= c
    return result[::-1]
