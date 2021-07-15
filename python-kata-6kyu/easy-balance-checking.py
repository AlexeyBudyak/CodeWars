def money_form(n):
    n = format(n, '.2f') + '0'
    return n[:n.index('.')+3]

def balance(book):
    new_book = ''
    for c in book:
        new_book+= c * (c not in '!=,:;{}?')
        
    arr = new_book.split('\n')
    
    original_balance = float(arr[0])
    balance = original_balance
    arr[0] = f"Original Balance: {money_form(original_balance)}\r"
    
    while '' in arr:    
        arr.remove('')

    for i,s in enumerate(arr[1:]):
        sub_arr = s.split(' ')
        price = float(sub_arr[2])
        balance-= price
        arr[i+1]= f"{' '.join(sub_arr[:-1])} {money_form(price)} Balance {money_form(balance)}\r"
        expense = original_balance - balance
    return "\n".join(arr) + f"\nTotal expense  {money_form(expense)}\r\nAverage expense  {money_form(expense/(len(arr)-1))}"
