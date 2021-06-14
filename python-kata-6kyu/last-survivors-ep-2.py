def last_survivors(s):
    abc = 'abcdefghijklmnopqrstuvwxyza'
    obj = {}
    for x in abc:
        if x in s: obj[x] = s.count(x)
    while sum(list(obj.values())) > len(obj):
        for x in obj:
            if obj[x] > 1: 
                obj[x] -= 2
                c = abc[abc.index(x) + 1]
                if c in obj: obj[c] += 1
                else: obj[c] = 1
                if obj[x] == 0: obj.pop(x)
                break
    return ''.join(list(obj))
