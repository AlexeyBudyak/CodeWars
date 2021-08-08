function swapVowelCase(str) {
  swap = {a:'A', e:'E', o:'O', u:'U', i:'I', A:'a', E:'e', O:'o', U:'u', I:'i'};
  return str.split('').map(el => swap[el] || el).join('')
}
