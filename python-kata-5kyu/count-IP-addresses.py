def ips_between(start, end):
    start = start.split(".")
    end = end.split(".")
    dif = []
    for i in [3,2,1,0]:
        if int(end[i]) >= int(start[i]):
            dif += [int(end[i]) - int(start[i])] 
        else:
            dif += [256 + int(end[i]) - int(start[i])] 
            end[i-1]= int(end[i-1]) - 1
    return sum(dif[i] * (256 ** i) for i in range(4))
