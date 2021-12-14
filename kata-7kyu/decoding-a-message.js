function decode(message){
  return message.replace(/[a-z]/g, c => String.fromCharCode(219 - c.charCodeAt(0)))
}
