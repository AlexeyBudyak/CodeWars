def check_three_and_two(array):
    obj = {}
    for el in array:
        if el in obj: obj[el]+= 1
        else:   obj[el] = 1
    return 2 in obj.values() and 3 in obj.values()
