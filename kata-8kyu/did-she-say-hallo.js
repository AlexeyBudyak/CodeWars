function validateHello(greetings) {
  const res =  ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
  return res.some(el=>greetings.toLowerCase().includes(el));
}
