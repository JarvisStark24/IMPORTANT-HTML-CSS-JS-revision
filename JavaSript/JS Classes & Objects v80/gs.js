class User {
  constructor(name) {
    //invokes the setter
    this.name = name;
  }
  //getter
  get name() {
    return this._name;
  }
  //setter
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
console.log(user.name); // John

user.name = "Jarvis"; // Name is too short.
console.log(user.name);
