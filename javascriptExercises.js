//Exercise One Looping a Triangle
let star = "#";
for (let i = 1; i < 8; i++) {
  console.log(star);
  star += "#";
}

//Exercise FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else console.log("has remainder");
}

//Exercise ChessBoard
let chessPiece = "";

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 == 0) {
      chessPiece += " ";
    } else chessPiece += "#";
  }
  chessPiece += "\n";
}
console.log(chessPiece);
