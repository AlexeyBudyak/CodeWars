var findDigit = function(num, nth){
    return nth < 1 ? -1 : nth  > (Math.abs(num)+'').length 
                          ? 0 : +(num+'0').split('').reverse()[nth];
}
