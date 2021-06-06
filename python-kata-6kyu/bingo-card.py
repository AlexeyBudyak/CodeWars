import random
def get_bingo_card():
    card = []
    for x,el in enumerate('BINGO'):
        taken = []
        for i in range(5 - (el == 'N')):
            n = random.randint(x * 15 + 1, x * 15 + 15)
            while n in taken:
                n = random.randint(x * 15 + 1, x * 15 + 15)
            taken.append(n)
            card.append(el + str(n))
    return card
