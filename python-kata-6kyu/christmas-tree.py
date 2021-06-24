def christmas_tree(n):
    tree = ''
    for i in range(n):
        tree += ' ' * (n - i - 1) + '*' * (i*2 + 1) + ' ' * (n - i - 1) + '\n'
    return tree[:-1]
