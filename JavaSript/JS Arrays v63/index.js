let arr = [1, 2, 3, 4, 5, 9];
arr[5] = 678;

// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[5])

// console.log(arr.toString()); // returns a string
// console.log(arr.join(' and '));
// console.log(arr.pop());  // returns the element removed

console.log(arr.push(10)); // returns the length of the array
console.log(arr);
console.log(arr.push("Jarvis")); // returns the length of the array
console.log(arr);
console.log(arr.shift()); // returns the element removed
console.log(arr);
console.log(arr.unshift("Stark")); // returns the length of the array
console.log(arr);
delete arr[5]; // deletes the element
console.log(arr);
arr.splice(2, 1, "Thor"); // adds Thor at index 2
console.log(arr);
