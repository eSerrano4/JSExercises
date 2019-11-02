var letter = "B";

function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, letter) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      counter++;
    }
  }
  return counter;
}

console.log(countChar("BBCBBBB", "C"));
