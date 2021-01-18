function solve(s,g){
    return (s - g) % g ? -1 : [g, s - g];
}
