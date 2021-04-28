def cool_string(s): 
    for i in range(0,len(s)):
        if not s[i].isalpha() or \
        (i < len(s)-1 and s[i].islower() == s[i+1].islower()): 
            return False
    return True
