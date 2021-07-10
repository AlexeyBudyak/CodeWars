def correctness(bd, ed): 
    return sum((bd[i] == ed[i]) + ((bd[i] + ed[i]).count('?') == 1) * 0.5 \
                for i in range(len(bd)))
