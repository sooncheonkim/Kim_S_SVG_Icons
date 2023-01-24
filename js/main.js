console.log('JavaScript is running!');

/* this is as JS block comment 
the let statement ctrates a variable - a chunk of computer memory that can hold refernences to date that you want to save. we're storing a refernce to an element on the page with this line - look for the element with the ID we specify inside of the round brakets(the image tag with the ID of BitmapGraphics

document refers to the index.html page; querySelcetor is HOW JS uses CSS to select elements on the page (called a method)    */

// step 1 - select the elements you want the user to interact with
let greenbrownbadge = document.querySelector("#greenbrownbadge");
let redbrownbadge = document.querySelector("#redbrownbadge");
let purplebadge = document.querySelector("#purplebadge");
let lightpurplebadge = document.querySelector("#lightpurplebadge");
let bluegreenbadge = document.querySelector("#bluegreenbadge");


// step 3 - what happens when events are triggered?
function logID() {
    console.log('User clicked on this graphic:', this. id);
} 

// step 2 - how do you want the user to interact with the element? 
greenbrownbadge.addEventListener('click', logID);
redbrownbadge.addEventListener('click', logID);
purplebadge.addEventListener('click', logID);
lightpurplebadge.addEventListener('click', logID);
bluegreenbadge.addEventListener('click', logID);