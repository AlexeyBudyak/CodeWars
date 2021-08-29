function nextLetter(str) {
  abc = "abcdefghijklmnopqrstuvwxyza";
  abc+= abc.toUpperCase();
  return str.split("").map(x=>abc.includes(x) ? abc[abc.indexOf(x) + 1] : x).join("");
}
