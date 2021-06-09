def is_sum_of_cubes(s):
    num_str = ''
    num_digit = 0
    num_cubic = 0
    num_len = 0
    total = 0
    lucky = ''
    for el in s+' ':
        is_digit = el in '0123456789'
        if is_digit and num_len < 3:
            num_str+= el
            num_len+= 1
            num_cubic+= int(el) ** 3
        if (num_str and not is_digit) or num_len == 3:
            num_digit = int(num_str)
            if num_digit == num_cubic: 
                lucky+= num_str + ' '
                total+= num_digit
            num_str = ''
            num_cubic = 0 
            num_len = 0
            
    if lucky != '': return lucky + str(total) + ' Lucky'
    return "Unlucky"
