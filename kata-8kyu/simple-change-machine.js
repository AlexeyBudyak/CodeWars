function changeMe(moneyIn){
  const f1 = "20p 20p 20p 20p 20p"
  switch(moneyIn){
  case "£1": return f1;
  case "£2": return f1 + ' ' + f1;
  case "£5": return f1 + ' ' + f1 + ' ' + f1 + ' ' + f1 +  ' ' + f1;   
  case "50p": return '20p 20p 10p';
  case "20p": return '10p 10p';
  default:  return moneyIn;
  }
}
