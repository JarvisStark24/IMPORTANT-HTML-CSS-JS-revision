let a = prompt("Enter first number");

let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Please correct your input");
}

let sum = parseInt(a) + parseInt(b);

function main() {
  let x = 2;
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error is there in your code bro!!!");
    return false;
  } finally {
    console.log("This is the final check and closing of your code");
  }
}
let c = main();
console.log(c);