// async function getData() {
//     //Simulate a delay to get data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(777);
//     }, 3000);
//   });
// }

async function getData() {
    //Simulate a delay to get data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') dummy data

    //Fetch API to post data
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
let data = await x.json() 
return data
}
async function main() {
  console.log("Loading modules");

  console.log("Doing something");

  console.log("Loading data");
  let data = await getData();
  console.log(data);

  console.log("Processing data");

  console.log("Task 2 data");
}

main();

// data.then((v) => {
//   console.log(data);

//   console.log("Processing data");

//   console.log("Task 2 data");
// });
