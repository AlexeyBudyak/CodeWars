def recover(st): 
    d = ['EORZ','ENO','OTW','EEHRT','FORU','EFIV','ISX','EENSV','EGHIT','EINN']
    n = ''
    for i in range(len(st)-2):
        for j in range(10):
            n += str(j) * ("".join(sorted(list(st[i:i+len(d[j])]))) == d[j])
    return n or 'No digits found'
