var vampire_test = function(a, b){
  return [...(a * b + '')].sort().join() === [...('' + a + b)].sort().join();
}
