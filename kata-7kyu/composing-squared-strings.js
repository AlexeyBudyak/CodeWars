function compose(s1, s2) {
    s1 = s1.split('\n');
    s2 = s2.split('\n');
    return s1.map((el,i) => el.slice(0,1 + i) + s2[s2.length - 1 - i].slice(0,el.length - i))
             .join('\n');
}
