def content_weight(w, scale): 
    n,_,compar = scale.split(" ")
    n = int(n); compar = bool(compar == 'larger')
    return w // (n + 1) * [1, n][compar]
