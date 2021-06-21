def data_reverse(data):
    result = []
    for i in range(len(data)-8, -8 ,-8):
        result+= data[i:i+8]
    return result
