def min_permutation(n):
    if not n: return 0
    s = str(abs(n))
    zeros = s.count('0')
    s = ''.join(sorted(s.replace('0','')))
    return int(['','-'][n < 0] + s[0] + '0' * zeros + ['',s[1:]][len(s) > 1])
