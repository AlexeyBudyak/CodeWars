def sum_str(s):
    return sum( int(x) for x in s)

def balanced_num(number):
    num = str(number)
    return (sum_str(num[:(len(num)+1)//2-1]) != sum_str(num[len(num)//2+1:])) * 'Not ' + 'Balanced'
