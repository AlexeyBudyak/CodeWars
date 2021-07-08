def testit(s):
    index = 0
    n = 0
    for el in s.lower():
        if el == "word"[index]:
            index = (index + 1) % 4
            if el == 'd': n+= 1
    return n
