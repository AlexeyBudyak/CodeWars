function vertMirror(arr) {
    return arr.map(el=>el.split('').reverse().join(''));
}
function horMirror(arr) {
    return arr.reverse();
}
function oper(fct, s) {
    return fct(s.split('\n')).join('\n');
}
