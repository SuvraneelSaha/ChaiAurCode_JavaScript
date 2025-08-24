// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
// This is the challenge that for every string - we make
// there should be a method / property by which we can find the original length of the string
// ie without spaces

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

// heroPower.hitesh();
// myHeros.hitesh()

// now we have injected a function ie which is a property inside of the Object
// via the prototype

// now we want to give the property only to Array

Array.prototype.heyHitesh = function () {
  console.log("hitesh says Hello");
};
// heroPower.hitesh()
// myHeros.hitesh()
myHeros.heyHitesh();
// heroPower.heyHitesh() -- this wont work
// heroPower.heyHitesh is not a function
// we have given the property to the children Array not to the Parent Object .
// so that specific function can be accessed by that Array child only

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// this way of making objects is an old way and injecting properties and functions
//  - new way is to make classes

Teacher.__proto__ = User;
// this is only prototypal inheritance
// that - how can we access other  object's properties

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
// gives the access of Teacher object's properties to that of the TeachingSupport

// now we are solving the challenge

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);

  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
// je call korche tar ei context use kora hobe - 
// aar sei context ta hocche this -- use kore 
// jis ka matlab this 
"iceTea".trueLength();
