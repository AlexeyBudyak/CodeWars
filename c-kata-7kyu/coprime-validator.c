def are_coprime(n,m):
    if n % m == 0: return m == 1
    else:   return are_coprime(m, n % m)
