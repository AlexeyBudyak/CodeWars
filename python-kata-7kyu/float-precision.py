def solution(n):
    n = n * 1000
    if n % 10 >= 5 : return (n + 10) // 10 / 100
    return n // 10 / 100
