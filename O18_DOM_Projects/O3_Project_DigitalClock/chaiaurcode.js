const clock = document.getElementById("clock");
// document.querySelector("#clock")

// so here we want to run the function again and again repeatedly for a number
// of times -- so here we dont need complicated stuffs like cron jobs
// we need simple setInterval

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// 1000 ms ie 1 sec
