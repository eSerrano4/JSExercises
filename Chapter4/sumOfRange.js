var list = [];

function range(firstNum, lastNumb) {
  //loops through range and pushes value of i onto array
  for (var i = firstNum; i <= lastNumb; i++) {
    list.push(i);
  }
  return list;
}
//console.log(range(1, 10));

function sum(arr) {
  var sum = 0;
  for (var j = 0; j < arr.length; j++) {
    sum = sum + arr[j];
  }
  return sum;
}

//console.log(sum(range(1, 10)));

function rangeStep(num1, num2, step) {
  if (!step) {
    for (var i = num1; i <= num2; i++) {
      list.push(i);
    }
  } else if (num1 <= num2) {
    for (var i = num1; i <= num2; i = i + step) {
      list.push(i);
    }
  } else if (num1 >= num2) {
    for (var j = num1; j >= num2; j = j + step) {
      list.push(j);
    }
  }
  return list;
}

console.log(sum(rangeStep(1, 10)));
