function incrementer(nums) { 
  return nums.map((el,i) => (el + 1 + i) % 10);
}
