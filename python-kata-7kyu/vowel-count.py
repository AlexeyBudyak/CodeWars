def get_count(input_str):
    num_vowels = 0
    vowels = 'aeiou'
    for el in input_str:
        num_vowels+= el in vowels 
    return num_vowels
