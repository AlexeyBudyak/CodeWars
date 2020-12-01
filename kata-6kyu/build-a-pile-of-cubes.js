function findNb(m) {
    let i, v = 0;
    for(i = 1; v < m; i++)  v+= i ** 3;
    return v === m ? i - 1 : -1;
}
