function hello(name) {
  if(name === undefined || !name)  return 'Hello, World!';   
  return 'Hello, ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
}
