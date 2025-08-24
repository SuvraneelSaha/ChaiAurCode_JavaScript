// prop means - properties

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    console.log(123);
    // we dont want method to give access to everyone
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());
// hitesh.createId is not a function -- this is the problem
// hitesh.createId();
//  this createId() is only available to the class ;
// it belongs to the class only not to the instances of the class 

User.createId();
