def spot_diff(s1, s2):
    indexes = []
    for i in range(len(s1)):
        if s1[i] != s2[i] : indexes.append(i)
    return indexes
