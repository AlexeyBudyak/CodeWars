function bouncingBall(h,  bounce,  window) {
  return  window >= h || bounce >= 1 || bounce < 0 ? -1
          : h * bounce <= window ? 1 : 2 + bouncingBall(h * bounce, bounce, window);
}
