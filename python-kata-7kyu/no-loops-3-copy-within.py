def copy(array, start, stop, place):
    if stop < start:    return array
    if place < 0:   place = len(array) + place
    return array[:place] + array[start:stop] + array[place + stop - start:]
