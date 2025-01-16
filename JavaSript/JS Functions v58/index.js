function nice(name) {
  console.log("Hey " + name + " This is a function practice");
  console.log("Hey " + name + " This is a dummy line");
  console.log("Hey " + name + " practicing functions");
  console.log("Hey " + name + " This is dummy line two");
}

function sum(a, b, c = 3) {
  // console.log(a + b);
  return a + b + c;
}
// sum(5, 5);
result1 = sum(1, 2);
result2 = sum(35, 5);
result3 = sum(25, 5, 55);

console.log("The sum of the numbers is: ", result1);
console.log("The sum of the numbers is: ", result2);
console.log("The sum of the numbers is: ", result3);

// console.log("I am Jarvis This is a function practice");
// console.log("I am Jarvis This is a dummy line");
// console.log("I am Jarvis practicing functions");
// console.log("I am Jarvis This is dummy line two");

//Arorw function

const func = (x) => {
  console.log("I am an arrow function", x);
};
func(5);
func(15);
func(25);
