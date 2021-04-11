let dict = ["", ".", ":", ":.", "::", "|:", "⟔", "⊓", "☐", "⧄"]

function write (num) {
  return num < 0 ? '' : "☒".repeat(~~(num/10)) + dict[num%10];
}

function read(dot) {
  const lastDigit = dict.indexOf(dot.replace(/[☒]/g,''));
  return dot.indexOf('☒') > 0 || lastDigit === -1 ? 0 :
              dot.replace(/[^☒]/g,'').length * 10 + lastDigit;
}
