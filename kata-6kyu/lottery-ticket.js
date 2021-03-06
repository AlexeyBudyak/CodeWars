function bingo(ticket, win){
  return ticket.filter(mini=>mini[0].includes(String.fromCharCode(mini[1]))).length >= win
            ? 'Winner!' : 'Loser!'
}
