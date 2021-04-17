function binaryFingers(binString) {
  const fingers =['Pinkie','Ring','Middle','Index','Thumb'];
  return binString.padStart(5,'0').split('').map((bit,i) => !!+bit ? fingers[i] : 0).filter(el=>el)
}
