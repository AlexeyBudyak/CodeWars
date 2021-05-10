def pair_zeros(arr):
    k = 1
    new_arr = []
    for el in arr:
        if k == 1 or el: new_arr.append(el)
        if not el: k = k * -1
    return new_arr
