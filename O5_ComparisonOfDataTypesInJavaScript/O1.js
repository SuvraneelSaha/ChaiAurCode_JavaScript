// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// these above lines of operations we know beforehand 
// and there is no confusion when we compare two same datatypes using any 
// == or === or any comparison operators . 

// console.log("2" > 1);
// console.log("02" > 1);

// these both will be true ; 
// as the comparison operator converts the String "2" into a number ; 
// same for the case of the "02"
 
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


// false
//false
//true
// This Only Happens in Js . 
// the null when it is compared with >= 0 it becomes true result ; 
// I dont know why but later I will get to know and learn about it . 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

/*
false
false
false
false
false
*/
// In case of undefined which means that the value is yet not defined ; 
// in java perspective it means that it was never initialized ; 
// Example - int a ; 
// its value is not defined ; 
// But we know for sure that even if we dont define a value in Java ; the default value is 0 ; 

// in Js we will get to know more about it just wait 



// ===

// console.log("2" === 2);

// this strict equal to operator checks both the value and the datatype of the operands ;

// console.log("3" == 3); 
// this above will become true with the == operator .  
