function spoonerize(words) {
    return words.split(' ')
                .map((el,i) => words.split(' ')[1-i][0] + el.slice(1,el.length))
                .join(' ');
}
