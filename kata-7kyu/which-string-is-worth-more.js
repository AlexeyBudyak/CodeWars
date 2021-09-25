const textValue = text => text.split('').reduce((sum,x) => sum + x.charCodeAt(), 0);

function highestValue(a, b) {
    return textValue(a) >= textValue(b) ? a : b;
}
