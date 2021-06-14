def product_of_4(s):
    p = 1
    for el in s:
        p*= int(el)
    return p

def lowest_product(num):
    if len(num) < 4: 
        return "Number is too small"
    arr = [num[i:i+4] for i in range(len(num)-3)]
    return min(product_of_4(x) for x in arr)
