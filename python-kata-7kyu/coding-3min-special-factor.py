def sc(n): 
    factors = []
    for x in range(1, n+1):
        if n % x == 0:
            factors.append(x)
    return factors
