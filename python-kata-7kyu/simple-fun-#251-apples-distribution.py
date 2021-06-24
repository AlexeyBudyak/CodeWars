def apples_distribution(apples, capacity, max_left):
    num = 0
    for i in range(1,min(apples,capacity) + 1):
        if apples % i <= max_left:
            num+= 1
    return num
