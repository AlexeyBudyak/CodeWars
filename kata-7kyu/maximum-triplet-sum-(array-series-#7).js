function redKnight(N, P) {
  return [['White','Black'][(N+P)%2], P * 2];
}
