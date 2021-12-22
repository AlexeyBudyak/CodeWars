function padovan(n) {
    let p = [1, 1 , 1, 2];
    while(n > 2)
      p = [p[1], p[2], p[3], p[1] + p [2]], n--;
    return p[2];
}
