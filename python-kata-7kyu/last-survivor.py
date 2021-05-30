def last_survivor(str, arr): 
    for el in arr:
        str = str[0:el] + str[el+1:]
    return str
