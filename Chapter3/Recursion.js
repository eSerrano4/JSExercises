/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/
function isEven(num) {
  // checks to see if number is even
  if (num == 0) {
    return true;
    //checks to see if number is odd
  } else if (num == 1) {
    return false;
  }
  // subtracts 2 and recalls function until num becomes 0 or 1
  else {
    num = num - 2;
    return isEven(num);
  }
}

console.log("is the number even: " + isEven(11));
