def construct_submatrix(matrix, y, x):
    result = []
    for i,line in enumerate(matrix):
        if i in y: continue
        temp = []
        for j,c in enumerate(line):
            if j not in x: temp.append(c)
        result.append(temp)
    return result
