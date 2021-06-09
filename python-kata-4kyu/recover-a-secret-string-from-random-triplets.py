def recoverSecret(triplets):
    for el in triplets:
        if el == []: continue
        if max("".join(sub_arr).find(el[0]) for sub_arr in triplets) < 1:
            for i in range(len(triplets)):
                if len(triplets[i]) and triplets[i][0] == el[0]:
                    triplets[i] = triplets[i][1:]
            return el[0] + recoverSecret(triplets)
    return ''
