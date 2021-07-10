import numpy

def smallest(n):
    x = 1
    for c in range(2,n+1):
        x = numpy.lcm(x,c)
    return x
