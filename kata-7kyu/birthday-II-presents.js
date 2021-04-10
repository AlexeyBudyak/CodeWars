function present(x, y){
  switch(x){
      case 'badpresent': return 'Take this back!';
      case 'crap': return 'acpr';
      case 'empty': return 'empty';
      case 'goodpresent': return String.fromCharCode(...[...x].map(el=>el.charCodeAt(0)+y));
      case 'dog': return  `pass out from excitement ${y} times`;
      case 'bang': return [...x].reduce((sum,l)=>sum + l.charCodeAt(0)-y,0);
  }
}
