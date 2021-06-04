def high_and_low(numbers):
    n = n_max = n_min = ''
    for el in numbers+' ':
        if el != ' ': n+= el
        else:
            if n_max == '' or n_max < int(n): n_max = int(n)
            if n_min == '' or n_min > int(n): n_min = int(n)
            n = ''
    return f'{n_max} {n_min}'
