def vowel_back(st):
    abc = 'abcdefghijklmnopqrstuvwxyz' 
    codes = 'vkbaafpqistuvwnyzabtpvfghi'
    s = ''
    for i in st:
        s+= codes[abc.index(i)]
    return s
