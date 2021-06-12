def sort_strings_by_vowels(seq): 
    dict = {}
    for el in seq:
        dict[el] = len(sorted(''.join(str(int(letter in 'aeouiAEOUI')) for letter in el).split('0'))[-1])
    i = 0
    while i < len(seq) -1:
        if dict[seq[i+1]] > dict[seq[i]]:
            [seq[i],seq[i+1]] = [seq[i+1],seq[i]]
            i = 0
        else: i += 1
    return seq
