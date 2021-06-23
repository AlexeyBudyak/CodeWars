def boredom(staff):
    scores ={"accounts": 1, "finance": 2, "canteen": 10, "regulation": 3, "trading": 6, "change": 6, "IS": 8, "retail": 5, "cleaning": 4,"pissing about":25}
    s = sum(scores[x] for x in staff.values())
    if s > 100:
        return 'party time!!'
    if s > 80:
        return 'i can handle this'
    return 'kill me now'
