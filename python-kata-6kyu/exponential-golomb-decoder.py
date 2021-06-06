def decoder(sequence):
    count = True;
    code = ''
    n = 0
    nums = []
    for el in sequence:
        if count: 
            n+= 1
            if el == '1':
                count = False
        if not count:
            code += el
            n-= 1
            if n == 0:
                nums.append(code)
                count = True
                code = ''
    for i,el in enumerate(nums):
        nums[i] = int(el, 2) - 1
    return nums
