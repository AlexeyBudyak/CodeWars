def type_of_triangle(a, b, c): 
    if type(a) != int or type(b) != int or type(c) != int or max(a,b,c) * 2 >= sum([a,b,c]):
        return "Not a valid triangle"
    if a == b == c:
        return "Equilateral"
    if a == b or a == c or b == c:
        return "Isosceles"
    return "Scalene"
