let score = 33;

console.log("The type of Score is "+typeof(score));

let score1 = "33abc";
console.log("The type of Score1 is " +typeof(score1));

console.log("Converting the score1 to a Number using TypeCasting via the Number Class ");

let valueInNumber = Number(score1);

console.log("The type of valueInNumber is" + typeof(valueInNumber));

let isBoolean = true ; 

console.log("The type of isBoolean is "+ typeof isBoolean);

let isBooleanInString = String(isBoolean);

console.log("The type of isBooleanInString  is " + typeof isBooleanInString);

let booleanName = "Hitesh"

let booleanNameType = Boolean(booleanName);

console.log("The type of booleanNameType is " + typeof booleanNameType);

let booleanName1 = "" ; 

let booleanNameType1 = Boolean(booleanName1);

console.log("The Type of booleanNameType1 is "+ typeof booleanNameType1);

console.log("Value of booleanNameType1 ie Empty String is -- "); 

console.log(booleanNameType1);


/*
Basically in Majority of the Cases what happens is that the browser gives us String value 
And we have to convert it to Numbers or Boooleans , So We need to understand how the values are acting 

for that we need to check for the Values the Actual values and also what type of values they are using 
the typeof Operator . 


*/

let nullValue = null ; 

console.log("Typeof of Null is " + typeof nullValue);

let nullValueInBoolean = Boolean(nullValue);

console.log("Boolean value of nullValue is "+nullValueInBoolean);

let someNumber = 33

let stringNumber = String(someNumber)
 console.log("String value of a Number is "+stringNumber);
 console.log("Type of a String Number is " + typeof stringNumber);