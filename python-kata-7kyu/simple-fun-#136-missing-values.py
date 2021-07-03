def missing_values(seq): 
    result = 0
    for el in set(seq):
        if seq.count(el) == 1:
            result = el * el
            break
    for el in set(seq):
        if seq.count(el) == 2:
            return result * el
