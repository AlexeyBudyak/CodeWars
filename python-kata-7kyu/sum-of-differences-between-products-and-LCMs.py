def sum_differences_between_products_and_LCMs(pairs):
    s = 0
    for i,[a,b] in enumerate(pairs):
        product = a * b
        lcm = product
        for j in range(product, max(a -1, b -a, 1), -max(a,b,1)):
            if j % a == j % b == 0:
                lcm = j
        s += product - lcm
    return s
