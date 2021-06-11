def kaprekar_split(n):
    s = str(n ** 2)
    if len(s) < 2: return 0
    for i in range(1,len(s)):
        if int(s[:i]) + int(s[i:]) == n:
           return i
    return -1
