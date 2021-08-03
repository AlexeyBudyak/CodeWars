def sc(n): 
    factors = []
    special_factors = []
    for x in range(1, n+1):
        if n % x == 0:
            factors.append(x)
    for x in factors:
        if str(bin(x))[2:] in str(bin(n))[2:]:
            special_factors.append(x)
    return special_factors
