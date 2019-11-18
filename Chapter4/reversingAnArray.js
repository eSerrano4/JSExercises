var list = [];

function reverseArray(list) {
  var arr = [];
  for (let i = list.length - 1; i >= 0; i--) {
    arr.push(list[i]);
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C", "D"]));

let arrayValue = ["one", "two", "three"];
function reverseArrayInPlace(arr) {
  //for loop that loops til it hits half the legnth of array
  for (var j = 0; j <= arr.length / 2; j++) {
    //creates temporary array that holds the value in reverse order
    let tempArr = arr[j];
    arr[j] = arr[arr.length - 1 - j];
    arr[arr.length - 1 - j] = tempArr;
  }
  return arr;
}

console.log(reverseArrayInPlace(arrayValue));
