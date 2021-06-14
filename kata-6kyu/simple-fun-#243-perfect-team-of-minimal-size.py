def a_in_b(a, b):
    p = 1
    for c in a:   
        p*= (c in b)
        if p == 0: 
            return False
    return True

def smartest(n, one, all):
    rest = [*all]
    rest.pop(n)
    for i,el in enumerate(rest):
        if a_in_b(one, el)  and (len(one) < len(el) or i < n):  
            return False
    return True

def recursion(n, candidates):
    min_size = len(candidates) + 1
    all = []
    for el in candidates: 
        all+= el
 
    all = list(set(all))
    
    for i in range(n):
        if i not in all: return -1
    
    if len(candidates) == 1:   return 2
    
    for i in range(len(candidates)):
        new_team = [*candidates]
        new_team.pop(i)
        new_size = perfect_team_of_minimal_size(n, new_team)
        if new_size != -1:
            min_size = min(min_size, new_size) 
    return min_size

def perfect_team_of_minimal_size(n, candidates):
    smart = []
    for i,el in enumerate(candidates): 
        if el and smartest(i, el, candidates):
            smart+= [el]
    print(smart)
    return recursion(n, smart)
