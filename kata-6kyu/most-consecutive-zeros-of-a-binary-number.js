function toBinary(n){
  let binary = '';
  while(n){
    binary += (n % 2) ? '1' : '0';
    n = ~~(n / 2);
  }
  return binary;
}
function countZeroes(n){
  return (toBinary(n) + '').replace(/[^0]/g,'*').split('*').sort((a,b)=>b.length - a.length)[0].length;
  
}
function maxConsecZeros(n){
  const count = ['Zero', 'One', 'Two', 'Three', 'Four', 
                 'Five', 'Six', 'Seven', 'Eight', 'Nine',
                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 
                 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen'];
  return count[countZeroes(n)];
}
