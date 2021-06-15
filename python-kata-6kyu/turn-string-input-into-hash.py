def str_to_hash(st): 
    if st == '': return {}
    obj = {}
    arr = st.split(', ')
    for el in arr:
        [k,n] = el.split('=')
        obj[k] = int(n)
    return obj
