def remove_duplicate_words(s):
    result = []
    for el in s.split(' '):
        if el not in result:
            result.append(el)
    print(result)
    return ' '.join(result)
