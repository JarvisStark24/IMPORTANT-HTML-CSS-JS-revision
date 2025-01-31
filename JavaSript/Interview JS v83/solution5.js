// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// Test cases
console.log(sumUntilNegative([1, 2, 3, 4, -1, 5, 6])); // 10 (1+2+3+4)
console.log(sumUntilNegative([10, 20, 30, -5, 40])); // 60 (10+20+30)
console.log(sumUntilNegative([-1, 5, 6, 7])); // 0 (stops immediately)
console.log(sumUntilNegative([5, 10, 15, 20])); // 50 (all numbers added)
console.log(sumUntilNegative([0, 5, -3, 8])); // 5 (0+5)

function sumUntilNegative(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num < 0) break;
    sum += num;
  }
  return sum;
}
