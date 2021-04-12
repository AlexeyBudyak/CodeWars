function helpJesse(array){
  return array.map(el=> 
   `Pour ${el.amount} mL of ${el.solution} into a ${el.instrument}` 
                   + (el.note ? ` (${el.note})` : '') );
}
