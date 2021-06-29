def show_sequence(n):
    if n < 0:   return str(n) + '<0'
    if n == 0:  return '0=0'
    return str(list(range(n+1)))[1:-1].replace(', ','+') + ' = ' + str((n+1) * n // 2)
