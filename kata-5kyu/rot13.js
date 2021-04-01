function rot13(message){
  const code = 'nopqrstuvwxyzabcdefghijklm';
  console.log(message);
  return message.split('')
                .map(el=> code.includes(el) 
                            ? code[el.charCodeAt(0) - 97] 
                            : code.toUpperCase()[el.charCodeAt(0) - 65] || el)
                .join('');
}
