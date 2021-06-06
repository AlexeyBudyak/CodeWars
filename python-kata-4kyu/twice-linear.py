def dbl_linear(n):
    x = 1
    y = []
    z = []
    for i in range (n):
        y.append(2 * x + 1)
        z.append(3 * x + 1)
        x = min(y[0],z[0])
        if x == y[0]: y.pop(0)
        if x == z[0]: z.pop(0)
    return x
