function solve(nums, div) {
  return nums.map(el => el + el % div);
}
