def max_sum_between_two_negatives(arr):
    sums = []
    temp = []
    for el in arr + [-1]:
        if el < 0:
            sums.append(temp)
            temp = []
        else:
            temp.append(el)
    if len(sums) < 3:   return -1
    return max(sum(x) for x in sums[1:-1])
