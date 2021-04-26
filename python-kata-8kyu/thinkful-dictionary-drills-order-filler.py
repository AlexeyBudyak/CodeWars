def fillable(stock, merch, n):
    if merch in stock:
        return stock[merch] >= n
    return False
