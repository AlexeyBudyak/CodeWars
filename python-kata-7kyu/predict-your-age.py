def predict_age(*ages):
    return (sum(x * x for x in ages) ** 0.5) // 2
