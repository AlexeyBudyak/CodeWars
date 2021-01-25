const round2 = n =>  ~~(n * 100)/100; 

var numberToMoney = function(n) {
  const K = ~~(n / 1000);
  return K ? K + ',' + (round2(n - (K - 1) * 1000) + '').slice(1) : round2(n) + '';
};
