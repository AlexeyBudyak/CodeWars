def triangle(row):
    rgb = {'GG':'G','RR':'R','BB':'B','BG':'R','GB':'R','RG':'B','GR':'B','BR':'G','RB':'G'}
    if len(row) == 1:
        return row
    return triangle("".join([rgb[row[i]+row[i+1]] for i in range(len(row)-1)]))
