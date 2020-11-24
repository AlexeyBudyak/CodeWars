function findScreenHeight(width, ratio) {
    const [x,y] = ratio.split(':');
    return width + 'x' + width * y / x;
}
