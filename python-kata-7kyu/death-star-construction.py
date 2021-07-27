def death_star(week, attack): 
    res = [100, 75, 50]
    for i in [0, 1, 2]:
        res[i] = max(res[i] - sum([el[i] for el in week[:attack]]), 0)
    if sum(res) == 0:
        return 'The station is completed!'
    return f'The station is destroyed! It needed {res[0]} iron, {res[1]} steel and {res[2]} chromium for completion.'
