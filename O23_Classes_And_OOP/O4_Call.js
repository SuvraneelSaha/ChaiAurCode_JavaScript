// in react earlier versions there used to call , bind in react
// but now it has evolved and we do not need to use them

// call stack -- it has global execution context , and each function gets added up
// to the call stack like in a stack line manner
// and each function comes with its own execution context

// this - means current execution context

// Execution context

// so callMe() comes here - Along with EC -- now here this refers to Global EC
// in case of Browser it access the window object ; but in node env
// it gives {} object
// function2 - EC -- inside of which it has another function callMe()
// function 1 - EC
// Global Execution context -- at bottom

function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
  // call hocche 
}
function createUser(username, email, password) {
  SetUsername.call(this , username); // here this gives the current context // ebar SetUsername er sob 
  // kichu values createUser er holo , mane SetUsername er Context aar properties 
  // passed on holo createUser e 
  // call hobe without call method
  // but the function will run and it will also remove the EC 
  // so for which all the variables declared in the EC will also will be removed 
  // outer function's EC is not reached 
  // but here we need to hold the reference so the outer EC can use it 
  // So we need to use the reference 
  this.email = email;
  this.password = password;
}

const chai = new createUser("ch>>ai", "chai@fb.com", "123");
console.log(chai);
