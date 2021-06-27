def to_ymd(date):
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
              'September', 'October', 'November', 'December']
    y = date[-4:]
    m = str(months.index(date[:date.index(' ')]) + 1)
    d = date[date.index(' ')+1:-6]
    if len(m) == 1: m = '0' + m
    if len(d) == 1: d = '0' + d
    return f'{y} {m} {d}'

def check_coupon(code1, code2, cur_date, exp_date):
    return code1 is code2 and to_ymd(cur_date) <= to_ymd(exp_date)
