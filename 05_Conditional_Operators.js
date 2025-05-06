// Conditional Operators
// There are 3 types of Operators if, if else, else if
// prompt("Hey What's your name?") // Prompt user for input
// alert("Hello World!") // Alert user with a message
// both are only worl on browser

let a = "23" //prompt("Enter your age: ")
a = parseInt(a) // Convert string to number
if (a > 18) {
    console.log("You are an adult")
}
else if (a > 12) {
    console.log("You are a teenager")
}
else {
    console.log("You are a child")
}


console.log(" if else statement")
if (a > 18) {
    console.log("You are an adult")
}
else if (a > 12) {
    console.log("You are a teenager")
}
else {
    console.log("You are a child")
}


console.log(" if else if else statement")
if (a > 18) {
    console.log("You are an adult")
}
else if (a > 12) {
    console.log("You are a teenager")
}
else if (a > 5) {
    console.log("You are a child")
}
else {
    console.log("You are a baby")
}

// Switch Statement
let wearing = ["shirt", "pants", "shoes"]
let i = 0
switch (wearing[i]) {
    case "shirt":
        console.log("You are wearing a shirt")
        break
    case "pants":
        console.log("You are wearing pants")
        break
    case "shoes":
        console.log("You are wearing shoes")
        break
    default:
        console.log("You are not wearing anything")
}

//  Ternary Operator
console.log("Ternary Operator: ")
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // Ternary operator
console.log("Can vote: ", canVote) // Output: Yes