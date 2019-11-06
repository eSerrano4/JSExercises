var list = [];

function reverseArray(list) {
  var arr = [];
  for (let i = list.length - 1; i >= 0; i--) {
    arr.push(list[i]);
  }
  return arr;
}

//console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace() {}
