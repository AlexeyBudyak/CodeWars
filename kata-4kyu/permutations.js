// need work to extract repeated part to recursion
// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function recursiveGenerator (arr){
  const n = arr.length;
  console.log(arr);
  const result = [];
  let x = '';
   if(arr.length === 1)  return arr;
  console.log('Checkpoint', arr);
   for(let i = 0; i < arr.length; i++){
     x = arr[i];
     console.log('Checkpoint 2', arr);
     if(x.length === n)  result.push(x)
     else
     for(let i2 = 0; i2 < arr.length; i2++){
       if(i2 === i)  continue;
       x = arr[i] + arr[i2];
       console.log('Checkpoint 3', arr);
       if(x.length === n)  result.push(x)
       else
       for(let i3 = 0; i3 < arr.length; i3++){
         if(i3 === i || i3 === i2)  continue;
         x = arr[i] + arr[i2] + arr[i3];
         if(x.length === n)  result.push(x)
         else
         for(let i4 = 0; i4 < arr.length; i4++){
            if(i4 === i3 || i4 === i2 || i4 === i)  continue;
           x = arr[i] + arr[i2] + arr[i3] + arr[i4];
           if(x.length === n)  result.push(x)
           else
           for(let i5 = 0; i5 < arr.length; i5++){
           if(i5 === i4 || i5 === i3 || i5 === i2 || i5 === i)  continue;
           x = arr[i] + arr[i2] + arr[i3] + arr[i4] + arr[i5];
           if(x.length === n)  result.push(x)
           
         }
         }      
       } 
     }
   }
  return result;
}

function permutations(str) {
  str = recursiveGenerator(str.split(''))
  return str.filter((el,i)=>str.indexOf(el) === i);
}
