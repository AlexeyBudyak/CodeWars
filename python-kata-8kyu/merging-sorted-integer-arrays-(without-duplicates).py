def merge_arrays(first, second): 
    arr = first + second
    arr = list(set(arr))
    arr.sort()
    return arr
