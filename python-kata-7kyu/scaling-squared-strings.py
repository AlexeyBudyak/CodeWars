def rep_str(s, n):
    return '\n'.join([s] * n) * (len(s) > 0)
def scale(s, k, n):
    arr = s.split('\n')
    return "\n".join([rep_str(''.join(x * k for x in arr[i]), n) for i in range(len(arr))])
