def find_a_b(numbers,c):
    for i in range(len(numbers)):
        n1 = numbers[i]
        try:
            n2 = c // n1
        except:
            n2 = numbers[i + 1]
        if n1 * n2 == c and n2 in numbers and (n1 != n2 or numbers.count(n2) > 1):
            return [n1, n2]
