def men_from_boys(arr):
    men = []
    boys = []
    for el in set(arr):
        if el % 2:  boys.append(el)
        else:       men.append(el)
    result = sorted(men) + sorted(boys, reverse = True)
    return result
