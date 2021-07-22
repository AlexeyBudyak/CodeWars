def give_change(amount): 
    result = []
    values = [100, 50, 20,10,5, 1]
    for value in values:
        result = [amount // value] + result
        amount = amount % value
    return tuple(result)
