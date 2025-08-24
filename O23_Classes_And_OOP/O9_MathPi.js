// why the value of pi is 3.14 ....
// can we change the value to 4 and how we are going to do it
// and if not then why

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// cant change the value of pi here

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// Math , property we need to give is PI -

// console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

So can we make an object in our project 
that we give hardcoded values ; and yes we can make something like these also 
*/

const chai = {
  name: "ginger Chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: false,
  // this enumerable property stops the iteration of this name property inside of the 
  // chai object 
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
