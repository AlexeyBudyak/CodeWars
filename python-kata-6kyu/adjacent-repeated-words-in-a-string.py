
6 kyu
Adjacent repeated words in a string
Python:
def count_adjacent_pairs(st): 
    n = 0
    pack = False
    arr = st.lower().split()
    print(arr)
    for i in range(0,len(arr)-1):
        if arr[i] == arr[i+1] and not pack: n+=1
        pack = arr[i] == arr[i+1]
    return n
