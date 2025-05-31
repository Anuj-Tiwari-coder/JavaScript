// Practice set 

// 01 Create a navbar and change the color of its firstelement to red
let navbar = document.body.firstElementChild;
navbar.style.color = "red"; // Changes its text color to red
console.log(navbar)

// 02 Create a table without using tbody Now use "view page Source button to check weather it has a tbody or not"

// Select the table
const table = document.getElementById("myTable");

console.log("tbody exists:", table.tBodies.length > 0); // true if <tbody> exists
console.log("tbody element:", table.tBodies[0]);

// 03 Create an element with 3 childern Now the change the the color of first first and last element in green
let elements = document.getElementsByClassName("3-element")[0]
elements.firstElementChild.style.color = "green"
elements.lastElementChild.style.color = "green"
console.log(elements)

// 04 Write a js code to change bg color of all <li> tags to cyan
let links = document.getElementsByClassName("nav-item")
let a = document.getElementsByClassName("nav-link")
for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "grey"
}
for (let j = 0; j < a.length; j++) {
    a[j].style.color = "red"
}

let Q = "05. Which of the following is used to look for the **nearest** ancestor that matches the given CSS selector?";

let ans = {
    a: "Matches",
    b: "Closest",   // Correct if question says "nearest"
    c: "Contains",
    d: "None of these"
};

console.log(Q, "\n", "ans:", ans.c)




