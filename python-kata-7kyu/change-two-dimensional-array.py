def matrix(array): 
    for i in range(len(array)):
        array[i][i] = int(array[i][i] >= 0)
    return array
