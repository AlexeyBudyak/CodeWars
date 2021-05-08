def presents(a):
    b = a[::]
    for i in range(len(a)):
        b[i] = a.index(i + 1) + 1
    return b
