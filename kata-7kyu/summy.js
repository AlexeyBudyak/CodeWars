function summy(str){
    return str.split(' ').reduce((sum, x) => sum + +x, 0);
}
