function alan(x){
  const stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
  return stations.every(el => x.includes(el)) ? 'Smell my cheese you mother!'
                                              : 'No, seriously, run. You will miss it.';
}
