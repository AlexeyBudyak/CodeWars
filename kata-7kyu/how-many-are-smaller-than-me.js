function smaller(nums) {
  return nums.map((el, i) => nums.slice(i+1).filter(filtEl => filtEl < el).length); 
}
