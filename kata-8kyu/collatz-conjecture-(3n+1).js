var hotpo = function(n, k = 0){
    return (n === 1) ? k : (n%2) ? hotpo(3*n+1,k + 1) : hotpo(n/2, k + 1);
}
