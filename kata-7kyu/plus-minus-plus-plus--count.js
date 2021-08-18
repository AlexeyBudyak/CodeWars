const catchSignChange = arr => arr.slice(1).reduce((sum,x,i)=> sum + ((x < 0) == (arr[i] >= 0)),0);
