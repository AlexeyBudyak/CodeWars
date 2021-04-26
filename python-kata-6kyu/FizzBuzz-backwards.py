def reverse_fizz_buzz(array):
    fizz = []
    buzz = []
    for i in range(0,len(array)):
        if array[i] in ['Fizz','FizzBuzz'] : fizz.append(i+1)
        if array[i] in ['Buzz','FizzBuzz'] : buzz.append(i+1)
    return (fizz[0],buzz[0])
