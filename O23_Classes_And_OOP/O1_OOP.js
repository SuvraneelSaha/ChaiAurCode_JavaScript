// this is an object - ie it is an object literal

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
    // in this function of getUserDetails there is also a
    // execution context ;
    // and now if we want to use any values outside of the current execution context
    // which is here in this case is the getUserDetails execution context ;
    // then we need to use --> this keyword
  },
};

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
// global context by default is empty
// in case of browser if we do this - console.log(this) --> we will get the browser's global
// context
// then we will be getting the window object -- Window

// This above is for the discussion of Object Literal

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; 
  // by default it gets returned 
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("Chai", 12, true); // gives new instance 
// this will get overidden by the first user if we dont use new keyword 

console.log(userOne.greeting());
console.log(userTwo.constructor);
// instanceOf -- checks if both the objects/instances are of the same class or not 

