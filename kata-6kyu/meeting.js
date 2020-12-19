function meeting(s) {
    return s.toUpperCase().split(';')
            .map(name=> '(' + name.split(':').reverse().join(', ') + ')')
            .sort().join('');
}
