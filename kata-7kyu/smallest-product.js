function smallestProduct(arr) {
    return arr.map(content => content.reduce((p, x) => p * x , 1))
              .reduce((min, x) => Math.min(min, x))
 }
