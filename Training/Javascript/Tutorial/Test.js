/* the script tag will load and execute the contents of main.js before the contents 
in the body have been rendered. Since there's every chance that you'll want to 
interact with the Document Object Model (DOM) in some way with your JavaScript file, 
you'll need a way to defer execution of the code until after the rest of the document has loaded. */

// Approach 1: wrap your entire file in an event listener
document.addEventListener("DOMContentLoaded", function () {
  // all your code goes here
});

// Approach 2: create an initializer function that runs your code
function initialize() {
  // your event handlers and setup logic goes here
}

// call your initializer function when the DOM is loaded
document.addEventListener("DOMContentLoaded", initialize);

/* <script src="./main.js"></script> <!-- place script at the end of the `body` will --> */

// all var type
let naming = david;
naming = jansen;
console.log(naming);
let age = 24;
let isApproved = true; //true/false
const firstName = David; //cannot be changed

// Event Listener
const button = document.querySelector("button");

// Option 1: direct assignment
button.onclick = function () {
  console.log("You clicked me!");
};

// Option 2: using the `addEventListener` method
button.addEventListener("click", function () {
  console.log("You clicked me!");
});

// Function vs Arrow
button.addEventListener("click", function () {
  console.log(this); // `this` refers to `button`
});

button.addEventListener("click", () => {
  console.log(this); // `this` is undefined with arrow functions
});

// If you want to access the button with an arrow function,
// you must pass an argument to the event listener, which refers to the event itself.
button.addEventListener("click", (event) => {
  console.log(event.target); // `event.target` is the element that was clicked
  console.log(event.currentTarget); // `event.currentTarget` is `button`
});

//event.currentTarget always refers to the element to which the event listener was assigned.
<button>
  Click me <em>Go on, it'll be fun</em>
</button>;

button.addEventListener("click", (event) => {
  console.log(event.target); // This could be the `button` or the `em`, depending what the user actually clicked on
  console.log(event.currentTarget); // This will always be the button
});

//You will often see event shorted to e, and you can also pass it to a function definition. It works in exactly the same way:
button.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
});

{
  /* <div id="screen"></div>

<button id="red">Red</button>
<button id="green">Green</button>
<button id="blue">Blue</button> */
}

const screen = document.getElementById("screen");
const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");

redBtn.addEventListener("click", (e) => {
  screen.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", (e) => {
  screen.style.backgroundColor = "green";
});

blueBtn.addEventListener("click", () => {
  screen.style.backgroundColor = "blue";
});

//Using loops

const buttons = document.querySelectorAll("button");

// with a for loop
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", (e) => {
    screen.style.backgroundColor = e.target.id;
  });
}

// with a for .. in loop
for (const i in buttons) {
  buttons[i].addEventListener("click", (e) => {
    screen.style.backgroundColor = e.target.id;
  });
}

// with a for .. of loop
for (const button of buttons) {
  button.addEventListener("click", (e) => {
    screen.style.backgroundColor = e.target.id;
  });
}

// with a forEach loop
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    screen.style.backgroundColor = e.target.id;
  });
});
