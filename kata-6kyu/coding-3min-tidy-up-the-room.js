function sc(room){
  let items = room.map(el=> el.join('')).join('').replace(/[ ]/g,'').split('')
  let corner = Math.ceil(items.length ** 0.5)
  return room.map((row,i)=> row.map((el,j)=> items.length && j < corner ? items.shift() : ' '))
}
