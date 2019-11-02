var answer;
function minimum(num1, num2) {
  if (num1 > num2) {
    answer = num1;
  } else answer = num2;
  return answer;
}

minimum(100, 5);
console.log(answer);
