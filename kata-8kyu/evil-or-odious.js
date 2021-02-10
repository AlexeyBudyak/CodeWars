function evil(n) {
    return n.toString(2).split('').reduce((a,b)=>a+ +b,0)%2 ? `It's Odious!` : `It's Evil!`;
}
