const F = n => !n ? 1 : n - M(F(n-1));
const M = n => !n ? 0 : n - F(M(n-1));
