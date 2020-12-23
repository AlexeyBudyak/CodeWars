var encryptThis = function(text) {
  return text.split(' ')
      .map(word => word.charCodeAt(0) 
                 + (word.length > 1 ? word[word.length - 1] : '') 
                 + word.split('').slice(2,-1).join('')  
                 + (word.length > 2 ? word[1] : '' ))          
            .join(' ');
}
