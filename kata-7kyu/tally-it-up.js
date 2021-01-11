var scoreToTally = function(score){
  return score > 4 ? 'e <br>' + scoreToTally(score - 5) : ['','a','b','c','d','e'][score];
}
