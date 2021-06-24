def increment_string(s):
    d = ''
    x = 1
    while len(s) and s[-1].isdigit():
        n = x + int(s[-1])
        d+= str(n % 10)
        x= n // 10
        s = s[:-1]
    if x: d+= str(x)
    return s +  d[-1::-1]
