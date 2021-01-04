function uniqueNumbers(nums) {
    return nums.filter((el,i)=>nums.indexOf(el) === i);
}
