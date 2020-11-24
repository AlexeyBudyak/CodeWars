function getStrings(city){
  city = city.toLowerCase().split('');
  return city.map((el, i)=>
            (i === city.indexOf(el) && el !== ' ') ? 
                el + ':' + '*'.repeat(city.filter(k => k === el).length) : '' )
             .filter(x => x).join(',');
}
