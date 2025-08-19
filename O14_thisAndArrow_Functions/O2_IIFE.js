// Immediately Invoked Function Expressions (IIFE)

// IIFE - for creating connection to the database , initialize global variables for immediate execution
// the method that needs to be run first
// for fixing the global scope pollution issue we use IIFE

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// semicolon is needed after calling this method to stop the context execution

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
// unnamed IIFE
