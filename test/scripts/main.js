// grabs a reference to your heading, and then store it in a variable called myHeading
const myHeading = document.querySelector("h1");

// set myHeading variable's textContent property
myHeading.textContent = "Hello world!";

// EVENTS
// enables interactivity

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
// });

// same but anonymous function
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
// });

// IMAGE DISPLAY
const myImage = document.querySelector("img");

// onclick event handler property equal to anonymous function
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/firefox2.png") {
        myImage.setAttribute("src", "https://i.insider.com/602ee9ced3ad27001837f2ac?width=2000&format=jpeg&auto=webp");
    }
    else {
        myImage.setAttribute("src", "img/firefox2.png");
    }
};

// BUTTON

// takes references to the new button and the heading, storing each inside variables
let myButton = document.querySelector("button");
let myHeading1 = document.querySelector("h1");

myButton.onclick = () => {
  setUserName();
};


// FUNCTIONS

// function to set the personalized greeting
function setUserName() {
    
    /* dialog box */
    const myName = prompt("Please enter your name.");

    /* localStorage(API) enables storage and retrieval of data from browser */
    // create browser data item "name" with value of myName
    localStorage.setItem("name", myName); 
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

// INITIALISATION

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}