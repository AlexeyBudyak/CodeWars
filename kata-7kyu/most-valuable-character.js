function solve(st) {
   const value = st.split('').map((el,i) => st.lastIndexOf(el) - i);
  const max = Math.max(...value);
  const elite = st.split('').filter((el, i) => value[i] === max).sort();
  return elite[0];
}
