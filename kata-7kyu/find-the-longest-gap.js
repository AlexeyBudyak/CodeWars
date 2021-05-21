function gap(num) {
    return num.toString(2).replace(/0/g,' ').trimRight().split('1').sort().reverse()[0].length;
}
