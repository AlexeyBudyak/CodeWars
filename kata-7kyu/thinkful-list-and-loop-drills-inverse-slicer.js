function inverseSlice(items, a, b) {
  return items.filter((_,i)=> i < a || i >= b);
}
