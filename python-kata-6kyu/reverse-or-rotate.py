def sum_cub (n):
    sc = 0
    for el in n:
        sc += (int(el) ** 3)
    if sc % 2 == 0:
        return n[::-1]
    else:
        return n[1:] + n[0]

def revrot(strng, sz):
    res = []
    result = ''
    if sz <= 0: return ''
    for i in range(0,len(strng),sz):
        res.append(strng[i:i+sz])
    if len(res[-1]) <sz:
        res = res[:-1]
    for el in res:
        result+= sum_cub(el)
    return result
