function hotSingles(arr1, arr2) {
  return [...arr1.filter((el,i) => arr1.indexOf(el) === i)
        , ...arr2.filter((el,i) => arr2.indexOf(el) === i)]
          .filter((el,_,arr)=>arr.indexOf(el) === arr.lastIndexOf(el))
}
