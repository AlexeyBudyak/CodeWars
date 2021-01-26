function stringBreakers(n, string){
  return Array(Math.ceil(string.length / n))
                 .fill(string.replace(/ /g,''))
                 .map((el,i) => el.slice(i * n, i * n + n)).join('\n');
}
