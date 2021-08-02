def db_sort(arr): 
    arr_int = []
    arr_str = []
    for el in arr:
        if type(el) == int:
            arr_int.append(el)
        else:
            arr_str.append(el)
    return sorted(arr_int) + sorted(arr_str)
