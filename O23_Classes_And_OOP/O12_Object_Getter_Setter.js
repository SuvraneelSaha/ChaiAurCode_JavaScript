const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// advantage here is that we can make a factory function
const tea = Object.create(User);
tea.email("Meow");
// email here is not a method 
// It’s defined as a getter/setter property, so you don’t call it like a method.
console.log(tea.email);
// we can actually access the email property even though we dont have an email property
