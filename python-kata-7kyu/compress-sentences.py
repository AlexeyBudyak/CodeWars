def compress(sentence):
    arr = sentence.lower().split(' ')
    unique_arr = []
    for el in arr:
        if el not in unique_arr: unique_arr.append(el)
    cs = ''
    for el in arr:
        cs+= str(unique_arr.index(el))
    return cs
