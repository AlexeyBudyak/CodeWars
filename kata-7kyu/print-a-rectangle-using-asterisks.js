function getRectangleString(width, height) {
  return '*'.repeat(width) + '\r\n' 
       + (height > 2 ?  Array(height-2).fill('*' + ' '.repeat(width-2) + '*\r\n').join('') : '')
       + (height > 1 ? '*'.repeat(width) + '\r\n' : '');
}
