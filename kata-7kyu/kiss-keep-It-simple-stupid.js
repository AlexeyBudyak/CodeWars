function isKiss( words ){
  words = words.split(' ');
  return words.every(word => word.length <= words.length) ? "Good work Joe!"
                                                          : "Keep It Simple Stupid";
}
