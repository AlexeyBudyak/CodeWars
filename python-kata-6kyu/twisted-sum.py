def digit_count(n):
    if n < 10: return n
    n = str(n)
    s = 0
    for i in n:
        s+= int(i)
    return s

def compute_sum(n):
    s = 0
    for i in range(1,n+1):
        s+= digit_count(i)
    return s
