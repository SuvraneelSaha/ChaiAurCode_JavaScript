//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

    // c = 30 
    // this will be the final value ; 
    // in case of var it acts as a global scoped variable 
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// Node env - global scope is different from browser's global scope 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
// it is ok 

function addone(num){
    return num + 1
}


//Cannot access 'addTwo' before initialization -- this is a problem in case of this 
// variables in js can hold anything 
// this is also a way to declare a function / method 
// this is hoisting - problem of Hoisting in js 
addTwo(5)
const addTwo = function(num){
    return num + 2
}