def sum_pairs(ints, s):
    res = set()
    for i in ints:
        if s - i in res:
            return [s - i, i]
        res.add(i)
