console.log("This is a praciing file");

// Variables in JS
//Global scope
// var a = 5;
var b = 10;
var c = "Jarvis";
//var 55a = "Stark"; not allowed

//Block scope
let a = 3;
a= a + 5;

{
    let a = 10;
    console.log(a);
}
console.log(a);


// console.log(a + b + 8 + c);
// console.log(typeof a, typeof b, typeof c);

//const a1 = 5;
//a1 = a1 + 10; // not allowed because a1 is a constant


// Data types in JS
// Primitive data types
// String
let name = "Tony Stark";
console.log("My name is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null (Object)
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference data types
// Arrays
let myArr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myArr));

// Object literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34,
    isStudying: true
}
console.log(stMarks);
stMarks.up = "10points";
console.log(stMarks);
console.log("Data type is " + (typeof stMarks));

