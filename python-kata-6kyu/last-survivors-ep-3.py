def last_survivors(arr, nums):
    result = ''
    nums = nums[:len(arr[0])]
    matrix = []
    for x in arr:
        matrix.append(list(x))
    for i in range(len(nums)):
        if nums[i] > 0:
            for j in range(len(arr)-1,-1,-1):
                if matrix[j][i] != ' ':
                    matrix[j][i] = ' '
                    nums[i]-= 1
                    if nums[i] == 0: break
    for lines in matrix:
        for el in lines:
            if el != ' ': 
                result+= el
    return result
