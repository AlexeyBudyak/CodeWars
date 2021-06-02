import random
def rnd_from_str(s):
    return s[random.randint(0,len(s)-1)]
def password_gen():
    abc = 'abcdefghijklmnopqrstuvwxyz'
    ABC = abc.upper()
    num = '0123456789'
    all = abc + ABC + num
    l = random.randint(6,20)
    ps = ''
    for i in range(0,l):
        if i == 0: ps+= rnd_from_str(num)
        elif i == 1: ps+= rnd_from_str(abc)
        elif i == 2: ps+= rnd_from_str(ABC)
        else: ps+= rnd_from_str(all)
    return ps;
