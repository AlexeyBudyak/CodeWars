function battle(player1, player2) {
  return {
    player1: player1.filter((el,i)=> i >= player2.length || el[1] - player2[i][0] > 0),
    player2: player2.filter((el,i)=> i >= player1.length || el[1] - player1[i][0] > 0)
  }
}
