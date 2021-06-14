def get_common_directory_path(pathes): 
    min_len = min(len(x) for x in pathes)
    for i in range(1, min_len):
        print(sum(x[i] == pathes[0][i] for x in pathes), len(pathes))
        if sum(x[i] == pathes[0][i] for x in pathes) < len(pathes):
            break
    j = pathes[0][:i].rfind('/') +1
    if j == 1 and sum(x[0] == pathes[0][0] for x in pathes) < len(pathes):
        return ''
    return pathes[0][:j]
