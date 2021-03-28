function isValid(idn) {
  return idn.length > 0 && /[A-Za-z_$]/.test(idn[0]) && 
    idn.slice(1).split('').every(el=> /[A-Za-z0-9_$]/.test(el)) 
}
