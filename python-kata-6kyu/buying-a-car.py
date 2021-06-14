def nbMonths(old, new, add, loss):
    m = 0
    saving = 0
    while old + saving < new:
        m+= 1
        saving+= add
        if m % 2 == 0: loss+= 0.5
        old = old -  (old * loss)/100
        new = new -  (new * loss)/100
    return [m, round(old + saving - new)]
