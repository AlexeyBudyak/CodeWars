function reverseFizzBuzz(arr) {
  let fizz = [];
  let buzz = [];
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] === 'Fizz' || arr[i] === 'FizzBuzz')  fizz.push(i+1);
    if(arr[i] === 'Buzz' || arr[i] === 'FizzBuzz')  buzz.push(i+1);
  }
  return [fizz[0],buzz[0]]
}
