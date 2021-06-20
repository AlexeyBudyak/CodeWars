def find_squares(num):
    c = (num + 1) // 2
    return str(c ** 2) + '-' + str((c-1)**2)
