function validPhoneNumber(phoneNumber){
  return phoneNumber.replace(/[0-9]/g,'*') === '(***) ***-****'
}
