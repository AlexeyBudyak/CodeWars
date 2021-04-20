function bouncingBall(initial, proportion) {
  let bounces = 0;
  while(initial > 1)  bounces++, initial*= proportion;
  return bounces;
};
