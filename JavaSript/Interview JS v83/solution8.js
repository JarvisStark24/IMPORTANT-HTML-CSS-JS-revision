// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function asyncMap(arr) {
  return arr.map(
    (num) =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 2), 500);
      })
  );
}


// Example usage:
async function runAsyncMap() {
    let promises = asyncMap([1, 2, 3, 4, 5]);
    
    // Wait for all promises to resolve
    let results = await Promise.all(promises);
    
    console.log(results); // [2, 4, 6, 8, 10]
}

runAsyncMap();