function rpsls(pl1,pl2){
  const war1 = {"scissors" : "paper",
                 "paper" : "rock",
                 "rock" : "lizard",
                 "lizard" : "spock",
                 "spock" : "scissors"}
  const war2 = {"scissors" : "lizard",
                 "paper" : "spock",
                 "rock" : "scissors",
                 "lizard" : "paper",
                 "spock" : "rock"}
  if(war1[pl1] === pl2 || war2[pl1] === pl2)  return "Player 1 Won!";
  if(war1[pl2] === pl1 || war2[pl2] === pl1)  return "Player 2 Won!";
  return 'Draw!';

}
