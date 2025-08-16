// shallow copy from one variavle abc to another variable xyz will change the values 

// but in case of deep copy it will not 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// adds the number at the starting 
// not an optimized approach , but we need to do it anyhow if needed 
// myArr.shift()

// this removes the 0th index element 
// console.log(myArr.includes(9));
// boolean value 
// console.log(myArr.indexOf(3));
// returns the index of the number 

// const newArr = myArr.join()
// converts the array into string 

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
// from 1 to 2 excluding the 3rd index 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3);
// from 1st to 3rd index including the 3rd index  
console.log("C ", myArr);
console.log(myn2);
// in case of splice it modifies the array ; 
// 