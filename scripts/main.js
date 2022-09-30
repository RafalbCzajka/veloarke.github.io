/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myVariable = "Bob"; //declare variable
myVariable = "Steve";

let iceCream = "chocolate";
if (iceCream == "chocolate") {
    alert("Chocolate ice cream is based.");
} else {
    alert("Cringe. Chocolate is better.");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector("img").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});
//function() could alternatively be written as () =>
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name: ");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Hello, " + myName + "!";
    }
}

if (!localStorage.getItem("name")) { 
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome back, " + storedName;
}

myButton.onclick = () => {
    setUserName();
};