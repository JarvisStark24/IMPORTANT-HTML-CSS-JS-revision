console.log("This is a practice session for LOOPS");

let a = 1;
// console.log(a);
// console.log(a + 1);
// console.log(a + 2);

// For loop
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

// For In Loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}


// For Of Loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let val of arr) {
    console.log(val);
}

// While Loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Do While Loop
let j = 0;
do {
    console.log(j);
    j++;
}
while (j < 10);

// Break Statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// Continue Statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Nested Loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

// Looping through an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Looping through an array using forEach
arr.forEach(function (element) {
    console.log(element);
});

// Looping through an array using map
let newArr = arr.map(function (element) {
    return element * 2;
});
console.log(newArr);

// Looping through an array using filter
let filteredArr = arr.filter(function (element) {
    return element > 5;
});
console.log(filteredArr);

// Looping through an array using reduce
let sum = arr.reduce(function (accumulator, element) {
    return accumulator + element;
});
console.log(sum);

// Looping through an array using some
let isEven = arr.some(function (element) {
    return element % 2 === 0;
});
console.log(isEven);

// Looping through an array using every
let allEven = arr.every(function (element) {
    return element % 2 === 0;
});
console.log(allEven);

// Looping through an array using find
let findElement = arr.find(function (element) {
    return element === 5;
});
console.log(findElement);

// Looping through an array using findIndex
let findIndex = arr.findIndex(function (element) {
    return element === 5;
});
console.log(findIndex);

// Looping through an array using indexOf
let index = arr.indexOf(5);
console.log(index);

// Looping through an array using lastIndexOf
let lastIndex = arr.lastIndexOf(5);
console.log(lastIndex);

// Looping through an array using includes
let isPresent = arr.includes(5);
console.log(isPresent);

