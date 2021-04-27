def crap(garden, bags, cap):
    bags = bags * cap
    for line in garden:
        if 'D' in line: return 'Dog!!'
    for line in garden:
        bags-= line.count('@')
        if bags < 0: return 'Cr@p'       
    return 'Clean'
