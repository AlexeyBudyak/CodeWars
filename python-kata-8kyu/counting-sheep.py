def count_sheeps(sheep):
    number_of_sheep = 0
    for el in sheep:
        if el == True:   number_of_sheep += 1
    return number_of_sheep
