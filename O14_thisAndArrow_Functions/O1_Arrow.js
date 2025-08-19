const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // this refers to the current context
    console.log(this);
    // here there are some valid current context
  },
};
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// In browser the global object is - window object
// it has been present from the very first js , as js was used in Browsers only
// using the v8 engine

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// inside objects it work but not in case of a method ;
// gives undefined value for this this.username
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// o/p - undefined
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
  // o/p - empty object
  // in case of this.username - o/p is undefined same as before
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// normal arrow function

// const addTwo = (num1, num2) => num1 + num2;
// implicit return statement

// const addTwo = (num1, num2) => (num1 + num2)
// this is also a implicit return ; 
// in case of parenthesis - {} we need to give return statement  mandatory 
// but in case of () we dont , this concept comes handy in react 

const addTwo = (num1, num2) => ({username: "hitesh"})
// for returning an object 

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


