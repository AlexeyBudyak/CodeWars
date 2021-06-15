def survivors(m, p):
    result = []
    for i in range(len(m)):
        for j in range(len(p[i])):
            if m[i] == 0: break
            m[i]-= 1
            m[i]+= p[i][j]
        if m[i] > 0:    result.append(i)
    return result
