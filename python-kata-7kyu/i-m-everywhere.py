import re
def i(word):
    if len(word) == 0 or word[0].upper()!=word[0] or word[0] == 'I' \
    or len(re.sub(r'[AEOUIaeoui]', '', word)) * 2 <= len(word): 
        return 'Invalid word'
    return 'i' + word
