def sortList(n):
    return sum([int(item) for item in n])

def order_weight(strng):
    s = sorted(strng.split(' '))
    res = sorted(s, key=sortList)
    return " ".join(res)
