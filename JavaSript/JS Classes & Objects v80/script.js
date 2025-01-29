//Understanding of Prototypes in JavaScript
// let obj = {
//   a: 1,
//   b: "Jarvis",
// };
// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; // rabbit object inherits from animal object // sets rabbit.[[Prototype]] = animal


//Understanding of classes in JavaScript
class Animal {
    constructor(name){
        this.name = name;
        console.log("object is created");
    }
    eats(){
        console.log("Animals are eating");
    }
    jump(){
        console.log("Animals are jumping");
    }
}

class Lion extends Animal {
    constructor(name){
        super(name);
        console.log("Lion object is created");
    }
    roar(){
        console.log("Lion is roaring");
    }
    eats(){
        console.log("Lion is eating");
    }
}

let a = new Animal("Monkey");
console.log(a);

let b = new Lion("Simba");
console.log(b);