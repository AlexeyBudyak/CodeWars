function countWins(winnerList, country) {
  sum = 0;
  for(i = 0; i < winnerList.length; i++)
    if(winnerList[i].country === country)  sum++;
  return sum;
}
