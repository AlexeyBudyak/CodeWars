const digital_root = n => n < 10 ? n : digital_root((n+'').split('').reduce((a,b)=>a+(+b),0));

// favorite from another person:
// function digital_root(n) {
//    return (n - 1) % 9 + 1;
//  }
