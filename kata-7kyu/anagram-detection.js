function sorting (arr){
  let temp;
  arr = arr.toLowerCase().split('');
  for(let i = 0; i < arr.length - 1; i++)
    if(arr[i + 1] > arr[i])
      temp = arr[i],arr[i] = arr[i + 1], arr[i + 1] = temp, i = -1;
  return arr.join('');
}
var isAnagram = function(test, original) {
  return sorting(test) === sorting(original);
};
