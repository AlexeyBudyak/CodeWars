function isValid(f){
  return (!(f.includes(1) && f.includes(2)) &&
          !(f.includes(3) && f.includes(4)) &&
          (f.includes(5) === f.includes(6)) &&
          (f.includes(7) || f.includes(8)));
}
