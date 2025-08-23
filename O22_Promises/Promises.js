// mainly consume

const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls , cryptography related calls , network calls
  // sob jinis ei time nei
  setTimeout(function () {
    console.log("Async task is complete"); // first this one
    resolve(); // then this
  }, 1000);
});
// at this point the promise is created -- we need to now consume the promise

// ES6 - introduced
// bluebird was introduced as a separate library and due to its excellent
// functionality it was bundled inside of es6 official release - Nodejs

promiseOne.then(function () {
  console.log("Promise Consumed");
});
// resolve connection

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2 ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  // connection is established via this keyword
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Meow", email: "Meow@example.com" });
    } else {
      reject("Error : Something went wrong ");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    // connection to the resolve method is done by the then method
    console.log(user);
    return user.username;
  })
  .then((myUserName) => {
    console.log(myUserName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally the promise is either resolved or rejected ");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "MeowPussy", password: "Meow@1234" });
    } else {
      reject("Error : MeowPussy went wrong ");
    }
  }, 1000);
});

async function consumePromiseFive() {
  const response = await promiseFive;
  console.log(response);
  // try catch block is important otherwise we wont be able to handle the implicit
  // errors
}

consumePromiseFive();

const promiseSix = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Aggin", password: "Meow@1234" });
    } else {
      reject("Error : In PromiseSix Something went wrong ");
    }
  }, 1000);
});

async function consumePromiseSix() {
  try {
    const response = await promiseSix;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseSix();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();
    // converting the string response to json
    console.log(data);
  } catch (error) {
    console.log("Error : ", error);
  }
}

getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error - ", error);
  });

// the major surprising thing -
// all the pritning of this async await response is coming at the top
// which should have been at bottom ;
// we will discuss this on the next lecture
