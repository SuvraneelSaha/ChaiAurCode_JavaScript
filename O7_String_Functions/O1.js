const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Well we need to use the Backticks in order to perform this ${name} operation ;

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// this above one is just an object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);
// this subString will always take the value from the Starting index to that of the
// Ending - 1 index value ;
// -ve not allowed 
// for Hitesh -- substring(0,4);

// the O/p will be like Hite ; it wont take the last value

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// only significant difference in slice is it can take - values ie -ve values ;

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));
// Replaces the substring that is Present ;

console.log(url.includes("sundar"));

// checks if a substring is present or not ;

console.log(gameName.split("-"));

// it divides the String into an Array of subStrings ; based on a pattern ; just like here the pattern is "-"

// -------------------------------------------------------------------------

// Stack - Primitive
// Heap - Non Primitive
let nameMine = "Aggin";
// copy ie call by value 

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};
// goes to the heap the object

let userTwo = userOne;
// reference
userTwo.email = "meow";

console.log(userOne.email);
console.log(userTwo.email);
