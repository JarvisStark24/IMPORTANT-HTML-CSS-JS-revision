let a = [1, 32, 93, 4, 75, 9];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)

// }

// a.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// let obj = {
//     name: "Tony Stark",
//     age: 45,
//     address: "10880 Malibu Point, 90265",
//     isAvenger: true,
//     };

// for (const key in obj) {
//     if(Object.hasOwnProperty.call(obj, key)){
//         const element = obj[key];
//         console.log(key,element);
//     }
// }


for (const iterator of a) {
    console.log(iterator);
}
