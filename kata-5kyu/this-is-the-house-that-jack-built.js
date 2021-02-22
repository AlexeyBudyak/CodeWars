function poem(){
  const p = ['house that Jack built.','malt','rat,','cat,','dog,',
            'cow with the crumpled horn,','maiden all forlorn,',
            'man all tattered and torn,',
            'priest all shaven and shorn,',
            'cock that crowed in the morn,',
            'farmer sowing his corn,']
  const p1 = p.map(e=>'This is the '+e)
  const p2 =['kept','waked','married','kissed', 'milked','tossed',
          'worried','killed','ate','lay in'].map((e,i)=>'That '+e+' the '+p[9-i]);
  return p1.map((el,i)=>el + (!i ? '' : '\n') + p2.slice(10-i).join('\n')).join('\n\n');
}   
