def data_withdraw(town, s):
    s = s[s.find(town):]
    s = s[:s.find('\n')]
    return s.replace(',',' ').split(' ')[1::2]  

def mean(town, s):
    if s.find(town + ':') == -1:
        return -1
    data = data_withdraw(town, s + ' ')
    return sum (float(el) for el in data) / 12
        
def variance(town, s):
    if s.find(town + ':') == -1:
        return -1
    data = data_withdraw(town, s + ' ' )
    ev = mean(town, s)
    return  sum((float(el) - ev) ** 2 for el in data) / len(data)
