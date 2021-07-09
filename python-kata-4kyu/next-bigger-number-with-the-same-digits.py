def next_bigger(n):
    print(n)
    n = str(n)
    arr = list(n)
    i = 0
    if all(arr[i] >= arr[i+1] for i in range(len(arr)-1)):
           return -1
    for i in range(len(arr)-2,-1,-1):
        if  arr[i] < arr[i+1]:
            head = "".join(arr[:i])
            tail = arr[i:]
            c = int(tail[0])+1
            while str(c) not in tail:   c+= 1
            c = str(c)
            j = tail.index(c)
            head+= c
            tail = "".join(sorted(tail[:j] + tail[j+1:]))
            return int(head + tail)
