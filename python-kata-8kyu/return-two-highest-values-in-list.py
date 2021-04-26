def two_highest(arg1):
    arg1 = list(set(arg1))
    arg1.sort()
    arg1.reverse()
    return arg1[0:2]
