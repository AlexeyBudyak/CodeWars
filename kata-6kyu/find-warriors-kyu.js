function getKyu(allHonors, honor){
  return +'1223344455566677778888'[allHonors.filter(el => el < honor).length] || 0;
}
