def kill_kth_bit(n, k):
    return (int("".join([str(int(c) * (k!=i+1)) for i,c in enumerate(str(bin(n))[2:][::-1])][::-1]), 2))
    
