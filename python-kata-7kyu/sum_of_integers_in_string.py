def sum_of_integers_in_string(s):
    num = '0'
    num_arr = []
    for c in s + ' ':
        if c.isdigit():
            num+= c
        else:
            num_arr.append(int(num))
            num = '0' 
    return sum(num_arr)
