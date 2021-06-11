def make_valley(arr):
    arr = sorted(arr,reverse = True)
    return arr[::2] + arr[1::2][::-1]
