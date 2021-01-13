function recycle(array) {
  const bin_names = ['paper', 'glass', 'organic', 'plastic'];
  const bins = [[],[],[],[]];
  array.forEach(item => {
                          bins[bin_names.indexOf(item.material)].push(item.type)
                          if(item.secondMaterial)
                            bins[bin_names.indexOf(item.secondMaterial)].push(item.type)
                        });
  return bins;
}
