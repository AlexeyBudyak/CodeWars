var numberFormat = function (number) {
  return (number+'').split('').reverse()
                    .map((el,i)=>i%3 === 0 && i && el !== '-' ? el + ',' : el)
                    .reverse().join('')
};
