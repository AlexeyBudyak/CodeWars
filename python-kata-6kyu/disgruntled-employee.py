def off(n):
    sw = [True] * n
    off = []
    for step in range(1,n+1):
        for i in range(step-1, n, step):
            sw[i] = not sw[i]
    for i,el in enumerate(sw):
        if not el:
            off.append(i+1)
    return off
