const accountId = 16969;

let accountName = "Suvraneel";

var accountEmail = "SS@gmail.com"

let accountCity = "Kolkata";

let accountState;
// by default those variables which are not defined 
// they are undefined in nature 

// accountId = 2 ; this cannot be done const variables cannot be reassigned 

// before changing

console.log("Before Changing");

console.table([accountId,accountName,accountEmail,accountCity,accountState]);

accountCity="Bengaluru";

accountEmail="sss@gmail.com";

accountName="Anese";

accountState = "WB";

console.log("After Changing");

// instead of using console.log() we used console.table so that it does not becomes a repetitive process
 

console.table([accountId,accountName,accountEmail,accountCity,accountState]);
