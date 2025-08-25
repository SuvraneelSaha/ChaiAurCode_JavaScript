class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  // in js setter is mandatory , even though the setting of the variables is happening
  // via the constructor only
  set email(value) {
    this._email = value;
    // Maximum call stack size exceeded
    // as the constructor and this setter method both are trying to set the value of it
    // a race condition happens between the constructor and the setter method
  }

  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.password);
