// Jacascript Execution Context 
 
// 2 parts - 1] global Execution context  --> this variable 
// different for node and browser environment 

// 2] Function EC 
// 3] Eval EC - not so important 

// for running js file
// run in two phases - 1] Memory Creation Phase -- allocates memory for variables
// 2] Execution phase 

// Step 1 - global EC - gets allocated in this 
// Step 2 - Memory Creation Phase - collects variables and stores undefined 
// also stores function definition here - addNum is the function it will store 
//its definition , also stores result1 , result2 

// Step 3 - Execution Phase - 
// val1 -- will store 10 
// val2 -- will store 5 
// addNum - and its separe Execution Context 
// result 1 gets stored 
/*
for addNum() method call - 
we will create a new Execution context 

new variable env + Execution thread 
each time a function gets called or executes a new 
execution context gets created -- new executional context 
Again for this particular method - it will have Memory phase and Execution phase 

.1] Memory phase - val1 , val2 - undefined 
.2] total 
then we go for 
EC - 
.1] num1 - 10 , 
.2] num2 - 5 
total - 15 
returns to the global execution context -- total gets returned 

This Execution context for this method gets deleted after execution 

result2 -- same as the result1 - execution context 
new variable env + thread 

then Memory phase and Exection phase -- same as result1 

*/



let val1 = 10 ;
let val2 = 5; 

function addNum(num1,num2) {
  let ans = num1+num2
  return ans;
}

let result1 = addNum(val1,val2);
let result2 = addNum(1,6);

/*

call stack 

three() - called from two
two() - called from one 
function - one() 
Global Execution 

after done - three() will get removed 
then two() 
then one()
LIFO 
*/

// call stack - in browser for better visualization 