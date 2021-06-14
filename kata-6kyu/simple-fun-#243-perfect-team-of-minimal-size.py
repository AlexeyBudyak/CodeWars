# unworking draft

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

def recursion(problems, candidates):
    all = []
    smart = []
    for i,el in enumerate(candidates): 
        all+= el
        if el and smartest(i, el, candidates):
            smart+= [el]
    all = list(set(all))
#     print(all)
#     print(smart)
    for i in problems:
        if i not in all: return -1
    
    for i in range(len(smart)):
        if a_in_b(all,smart[i]):
            return 2
    
    min_team = len(smart) + 1
    for i in range(len(smart)):
        reduced_team = [*smart]
        in_team = reduced_team.pop(i)
        reduced_problems = []
        
        for el in in_team:
            if el in reduced_problems:
                reduced_problems.remove(el)
        new_team = recursion(reduced_problems, reduced_team)
        new_team2 = recursion(reduced_problems, smart[1:])
      
        if new_team != -1:
            # print('min',new_team, min_team)
            min_team = min(new_team +  1, new_team2 + 1, min_team)
        
            
    return min_team

def perfect_team_of_minimal_size(n, candidates):
    problems = list(range(n))
    return recursion(problems, candidates)
