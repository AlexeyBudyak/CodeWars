function findOdd(A) {
  A = A.sort();
  do{
    if(!(A.lastIndexOf(A[0]) % 2))  
      return A[0];
    else  
      A = A.slice(A.lastIndexOf(A[0]) + 1);    
  }while(A.length > 1);
  return A[0];
}

// My favorute from another person:
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
