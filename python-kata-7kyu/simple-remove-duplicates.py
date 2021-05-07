def solve(arr): 
    new_arr = []
    arr.reverse()
    for el in arr:
        if el not in new_arr:
            new_arr.append(el)
    new_arr.reverse()
    return new_arr
