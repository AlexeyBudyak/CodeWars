def dollar_to_speech(value):
    value = float(value[1:])
    if value < 0:
        return 'No negative numbers are allowed!'
    dollars = int(value)
    cents = round(value % 1 * 100)
    text_dollar = f"{dollars} dollar{'s' * (dollars != 1)}"
    text_cents = f"{cents} cent{'s' * (cents != 1)}."
    if cents == 0:
        return text_dollar + '.'
    return (text_dollar + ' and ') * (dollars > 0) + text_cents
