function perfectRoots(n){
  return (~~(n ** 0.5)) ** 2 === n &&
         (~~(n ** 0.25)) ** 4 === n &&
         (~~(n ** 0.125)) ** 8 === n
}
