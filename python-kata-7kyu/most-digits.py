def find_longest(arr):
    c = len(str(max(arr))) - 1
    for n in arr:
        if n >= 10 ** c:
            return n
