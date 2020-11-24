function uefaEuro2016(teams, scores){
  let text = `At match ${teams[0]} - ${teams[1]}, `;
  text +=  scores[0] === scores[1] ? `teams played draw.` : `${teams[+(scores[1]>scores[0])]} won!`;
  return text;
}
