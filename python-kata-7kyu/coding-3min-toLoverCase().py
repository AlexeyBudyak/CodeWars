def to_lover_case(string):
    love = ''
    for c in string:
        love+= [c, "LOVE"[(ord(c)-97) % 4]][c.isalpha()]
    return love
