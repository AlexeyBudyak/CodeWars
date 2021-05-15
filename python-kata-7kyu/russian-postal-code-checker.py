import re
def zipvalidate(postcode):
    return len(postcode) == 6 \
            and postcode[0] in '12346' \
            and re.sub(r"[0-9]",  '', postcode) == '' 
