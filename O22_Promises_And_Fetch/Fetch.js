//  the global fetch method starts the process of fetching a resource 
// from the network , returning a promise which is fulfilled once the response is 
// available 

// error code - 404 - where it will come - resolve or reject ; 
// it will come as a response . Error only when the request was not done to the server 

// fetch is coming first as an output even before all the codes 

// Micro task queue or Priority Queue is made  only for fetch()
// it stores the callbacks --> this is the vip line 
// it adds to the call stack in priority 

// response = fetch("Something"){} -- {} is for objects that are sent 
// two parts - part 1 - Data - onFulfilled[] and onRejection[] same as resolve and reject 
// manual overriding of these two arrays are not possible 
// part 2 - request to the web browser / node 
// the network request goes through the either the web browser env or the node env 
// if aany response -- it goes to the onFulfilled[] or resolve() 
// and if no request was not able to go then and then only it goes to reject()
// and responses even if 404 -- then also it goes to resolve()

