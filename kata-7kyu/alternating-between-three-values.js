function f(x, cc) { 
  switch(x){
      case cc.a:  return cc.b;
      case cc.b:  return cc.c;
      default: return cc.a;
  }
}
