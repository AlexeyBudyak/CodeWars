def count_cows(n):
    if n == [] or n == {}: return None 
    cows = [0]
    for year in range(n):
        for i in range(len(cows)):
            cows[i]+=  1
        num_cows = sum( [cow >= 3 for cow in cows])
        cows += [0] * num_cows
    return len(cows)
