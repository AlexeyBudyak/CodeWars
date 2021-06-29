def cut_neg(n):
    return n * (n > 0)

def phone(strng, num):
    arr = strng.split('\n')
    arr = [el for el in arr if num in el]
    if len(arr) > 1:   
        return f"Error => Too many people: {num}"
    if len(arr) == 0:   
        return f"Error => Not found: {num}"
    s = arr[0]
    name = s[s.index('<')+1:s.index('>')]   
    s = s[:s.index('<') ] + s[s.index('>')+2:]  # remove name
    s = s[:cut_neg(s.index(num)-2)] + s[s.index(num)+len(num)+1:]   # remove phone
    s = s.replace(';', ' ')
    s = s.replace(',', ' ')
    s = s.replace('/', ' ')
    s = s.replace('_', ' ')
    s = s.replace('  ', ' ')
    s = s.strip()
    return f"Phone => {num}, Name => {name}, Address => {s}"
