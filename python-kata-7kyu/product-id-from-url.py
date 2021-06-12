def get_product_id(url): 
    a = b = len(url) - url[::-1].find('-p-') 
    while url[b].isdigit(): b+= 1
    return url[a:b]
