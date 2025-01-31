// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// For example, given the array [1, 2, 2, 3, 4, 4, 4, 5], the output should be [2, 4, 2, 6, 8, 4, 4, 10].

function doubleTrouble(arr) {
  let result = [];
  let prev = null; // keep track of the previous number

  for (let num of arr) {
    if (num === prev) {
      result.push(num); // keep duplicate unchanged
    } else {
      result.push(num * 2); // double the number
    }
    prev = num; // update the previous number
  }
  return result;
}

// Test cases
console.log(doubleTrouble([1, 2, 2, 3, 4, 4, 4, 5])); // [2, 4, 2, 6, 8, 4, 4, 10]
console.log(doubleTrouble([1, 2, 2, 3, 4, 4, 4, 4, 5])); // [2, 4, 2, 6, 8, 4, 4, 8, 10]
console.log(doubleTrouble([1, 2, 2, 3, 4, 4, 4, 4, 4, 5])); // [2, 4, 2, 6, 8, 4, 4, 8, 8, 10]
