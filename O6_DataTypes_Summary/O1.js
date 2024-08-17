//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// Js is Dynamic Typed Language ; 

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// userEmail value will be undefined 

const id = Symbol('123')
const anotherId = Symbol('123')
// Symbol is a class itself ;
console.log(id === anotherId);
console.log(id);
// Symbol(123) 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];


let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

console.log(myFunction); 
// [Function: myFunction]


console.log(typeof heros);
// its Object 

console.log(typeof myFunction);
// object Function Actuall its type 

console.log(typeof myObj);
// Object 

