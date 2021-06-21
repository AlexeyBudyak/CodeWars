def capitalize(s):
    result = ['','']
    for i,el in enumerate(s):
        result[i%2]+= el.upper()         
        result[not i%2]+= el.lower()
    return result
