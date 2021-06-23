def meeting(rooms, number):
    if not number:  return 'Game On'
    s = 0
    arr = []
    for el in rooms:
        x = max(el[1] - len(el[0]),0)
        x = min(x, number - s)
        arr.append(x)
        s+= x
        if s == number:
            return arr
    return 'Not enough!'
