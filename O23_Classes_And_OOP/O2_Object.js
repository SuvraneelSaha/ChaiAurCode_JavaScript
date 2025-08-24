// default behaviour - it is a prototypal behaviour

// prototype is the reason for -- new , classes , this keyword

// Haar manbo naa erokom jinis hocche prototype

// Array -- it is also an Object
// the parent of Object is null - by default not any other class

// Also for the case of String it is the same way

// Properties of Object are passed to that of the string and Array
// now using the properties are dependent on the user

// function is a function as well as an object

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
// 25 as usual
console.log(multipleBy5.power);
// 2 -- o/p
console.log(multipleBy5.prototype);
// {} - empty object gets returned
// prototype stores all the properties of the object

// Prototypical inheritance is the underlying funda

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  // context - dependent
  // jisne bhi bulaya hein uske paas jao
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
  // we are injecting this printMe function inside of the createUser function ;
  // as the prototype holds all the underlying properties of any object , function , array , string
  // everything
};

const chai = new createUser("chai", 25);
// cannot read properties of undefined (reading 'printMe')
// we need to create an instance by using new keyword
const tea = createUser("tea", 250);

chai.increment();
chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/