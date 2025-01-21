// alert('promise.js');
console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Jarvis is dead!");
  } else {
    setTimeout(() => {
      console.log("Jarvis is alive!");
      resolve("Jarvis")
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Ultron is dead!");
  } else {
    setTimeout(() => {
      console.log("Ultron is alive!");
      resolve("Ultron")
    }, 1000);
  }
});

// promise.then((a) => {
//   console.log(a);
// }).catch((err)=> {
//     console.log(err);
// })

// let p3 = Promise.all([prom1, prom2])
// p3.then ((a)=> {
//     console.log(a);
// }).catch((err)=> {
//     console.log(err);
// })
let p3 = Promise.race([prom1, prom2])
p3.then ((a)=> {
    console.log(a);
}).catch((err)=> {
    console.log(err);
})


