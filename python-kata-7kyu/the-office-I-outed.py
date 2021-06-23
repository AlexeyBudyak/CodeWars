def outed(meet, boss):
    happy_rate =  (meet[boss] + sum(meet.values())) / len(meet)
    return ['Nice Work Champ!', 'Get Out Now!'][happy_rate <= 5]
