function isAValidMessage(message){
  const num = '0123456789';
  if(message === '')  return true;
  return message.split('')
                .map((el,i) => 
                     (i && num.includes(el) !== num.includes(message[i - 1]))
                     ? ' ' + el : el)
                .join('')
                .split(' ')
                .every((el,i,arr) => (i % 2 === 0 && i < arr.length - 1 && arr[i + 1].length === +el) || i % 2 );
}
