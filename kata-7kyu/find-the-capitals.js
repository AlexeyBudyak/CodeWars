var capitals = function (word) {
  let capsArr = [];
  for(let i = 0; i < word.length; i++)
    if(word[i] === word[i].toUpperCase())  capsArr.push(i);
  return capsArr;
}
