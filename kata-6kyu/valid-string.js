var validWord = function(dictionary, word) {
  dictionary = dictionary.sort();
  for(let i = 0; i < dictionary.length; i++)
    word = word.replace(dictionary[i],'').replace(dictionary[i],'');
  return word === '';
};
