def intish(c):
    try:    return int(c)
    except: return 10

def valid_ISBN10(isbn): 
    if len(isbn) != 10 or not isbn[:-1].isdigit() or isbn[-1] not in '0123456789X': 
        return False
    return sum([intish(c) * i for i,c in enumerate(isbn, 1)]) % 11 == 0
