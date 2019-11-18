function arrayToList(arr) {
  let list = null;

  for (var i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

//console.log(arrayToList([10, 20, 30]));

function listToArray(list) {
  let tempArr = [];
  for (let node = list; node; node = node.rest) {
    tempArr.push(node.value);
  }
  return tempArr;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(num, restValue) {
  return { value: num, rest: restValue };
}
console.log(prepend(10, prepend(20, null)));
