function rot(str) {
    return str.split('\n').map(el=>el.split('').reverse().join('')).reverse().join('\n');
}
function selfieAndRot(str) {
    return str.split('\n').map(el=>el + '.'.repeat(el.length) + '\n').join('') + 
      rot(str).split('\n').map(el=>'.'.repeat(el.length)  + el).join('\n');
}
function oper(fct, s) {
    return fct(s);
}
