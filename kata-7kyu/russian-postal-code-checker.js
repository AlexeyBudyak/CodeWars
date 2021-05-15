function zipvalidate(postcode){
  return postcode.length === 6 
         && '12346'.includes(postcode[0]) 
         && postcode.replace(/[0-9]/g,'') === '';
}
