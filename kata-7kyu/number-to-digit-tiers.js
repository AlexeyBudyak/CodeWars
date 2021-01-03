function createArrayOfTiers(num) {
    return (num+'').split('').map((el,i)=> (num+'').substring(0, i + 1));
}
