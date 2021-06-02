def get_real_floor(n):
    return n - (n == 1) - (n > 3) - (n > 12)
