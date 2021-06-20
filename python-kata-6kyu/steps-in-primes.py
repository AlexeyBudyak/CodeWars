def is_prime(num):
    if num <= 1:
        return False
    for i in range(2,int(num**0.5)+1):
        if num % i == 0:
            return False
    return True

def step(g, m, n):
    pair = []
    for i in range(m,n+1):
        if is_prime(i):
            pair.append(i)
        if len(pair) > 1 and (pair[-1] - g) in pair:
            return [pair[-1] - g, pair[-1]]
    return None
