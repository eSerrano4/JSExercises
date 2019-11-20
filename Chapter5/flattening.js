let arrays = [[1, 2, 3], [4, 5], [6]];

let answer = arrays.reduce(function(newArr, currentVal) {
  return newArr.concat(currentVal);
}, []);

console.log(answer);
