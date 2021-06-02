def reverse_it(data):
    tp = str(type(data));
    if(tp.find('str') > -1):  
        return data[::-1]
    if(tp.find('int') > -1):  
        return int(str(data)[::-1])
    if(tp.find('float') > -1):  
        return float(str(data)[::-1])
    return data
