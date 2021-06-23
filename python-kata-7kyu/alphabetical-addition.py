def add_letters(*letters):
    abc = 'abcdefghijklmnopqrstuvwxyz'
    return abc[sum( abc.index(c) + 1 for c in letters) % 26 - 1]
