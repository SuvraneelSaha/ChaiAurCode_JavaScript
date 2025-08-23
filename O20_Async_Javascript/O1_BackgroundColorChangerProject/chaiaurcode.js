//generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// select the two elements
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

// methods and functions
let intervalId;
const startChangingColor = function () {
  // i need to use setInterval
  // i need to use validate that intervalId is valid or not
  // also i need to change the background color

  if (!intervalId) {
    console.log("Started");

    intervalId = setInterval(backGroundColorChanger, 2000);
  }
  function backGroundColorChanger() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  console.log("Stopped");

  clearInterval(intervalId);
  intervalId = null;
};

// adding event listener to both of them

startButton.addEventListener("click", startChangingColor);

stopButton.addEventListener("click", stopChangingColor);
