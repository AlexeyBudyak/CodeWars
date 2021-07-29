def alphabet_war(fight):
    lside = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    rside = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    l, r = 0, 0
    for i,c in enumerate(fight):
        if (i and fight[i-1] == '*') or (i < len(fight)-1 and fight[i+1] == '*'):   c = '0' 
        l+= lside.get(c,0)
        r+= rside.get(c,0)
    if l == r:
        return "Let's fight again!"
    print(fight)
    print(l,r)
    return ['Left','Right'][r > l] + ' side wins!'
