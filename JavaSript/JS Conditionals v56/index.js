console.log("Hello, This is a conditional practice");

const age = 15;

// If else statement
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Comparison operators
if (age == 18) {
  console.log("You are 18 years old");
} else if (age > 18) {
  console.log("You are above 18 years old");
} else {
  console.log("You are below 18 years old");
}

// Logical operators
const isAdult = age >= 18;
const isSeniorCitizen = age >= 60;
if (isAdult && isSeniorCitizen) {
  console.log("You are a senior citizen");
} else if (isAdult && !isSeniorCitizen) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}

// Nested if else statement
const day = "Monday";
if (day == "Monday") {
  console.log("Today is Monday");
} else if (day == "Tuesday") {
  console.log("Today is Tuesday");
} else if (day == "Wednesday") {
  console.log("Today is Wednesday");
} else if (day == "Thursday") {
  console.log("Today is Thursday");
} else if (day == "Friday") {
  console.log("Today is Friday");
} else if (day == "Saturday") {
  console.log("Today is Saturday");
} else if (day == "Sunday") {
  console.log("Today is Sunday");
} else {
  console.log("Invalid day");
}

// Short circuit evaluation
const user = {
  name: "John",
  age: 25
};
const name = user.name || "Anonymous";
console.log(name);

// Switch statement
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Ternary operator
const adultStatus = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(adultStatus);