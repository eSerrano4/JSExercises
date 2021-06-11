/*

*/

/*function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}*/

console.log(every([1, 3, 0], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

function every(array, test) {
  return !array.some(check => !test(check));
}
