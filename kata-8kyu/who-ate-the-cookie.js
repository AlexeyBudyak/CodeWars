function cookie(x){
  const eater = {string : 'Zach', 
                 number: 'Monica', 
                 boolean: 'the dog', 
                 object: 'the dog', 
                 function: 'the dog'};
  return 'Who ate the last cookie? It was ' + eater[typeof(x)] + '!';
}
