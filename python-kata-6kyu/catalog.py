def catalog(s, article):
    arr = []
    s = s.replace('\n', '')
    s = s.replace('<prod><name>', '')
    s = s.replace('</name><prx>', ' > prx: $')
    s = s.replace('</prx><qty>', ' qty: ')
    s = s.split('</qty></prod>')
    for el in s:
        if article in el:
            arr.append(el)
    return '\r\n'.join(arr) or 'Nothing'
