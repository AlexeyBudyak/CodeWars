def restaurant(t1, t2, visitors):
    t2_ = 0
    s = 0
    for p in visitors:
        if p == 1:
            if t1 > 0:
                t1 -= 1
                s += 1
            elif t2 > 0:
                t2 -= 1
                t2_ += 1
                s+= 1
            elif t2_ > 0:
                t2_ -= 1
                s+= 1
        elif t2 > 0:
            t2 -= 1
            s+= 2
    return sum(visitors) - s
