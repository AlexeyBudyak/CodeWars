unction reverseOnDiagonals(matrix) {
  for(i = 0; i < matrix.length / 2; i++)
    [matrix[i][i], matrix[matrix.length-i-1][matrix.length-i-1]] 
      = [matrix[matrix.length-i-1][matrix.length-i-1], matrix[i][i]],
    [matrix[i][matrix.length-i-1], matrix[matrix.length-i-1][i]] 
      =[matrix[matrix.length-i-1][i], matrix[i][matrix.length-i-1]];
  return matrix;
}
