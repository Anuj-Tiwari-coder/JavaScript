// 01 Write a program using promt function to take input of age as a value from the user and use alert to alert them if they can derive or not.
let age = prompt("Please enter your age:");
age = Number.parseInt(age)
const canDrive = (age) => {
    return (age >= 18) ? true : false
}

if (canDrive(age)) {
    alert("You can drive.");
}
else {
    alert("You cannot drive yet.");
}
document.write(`You entered age: ${age} <br>`);


// 02 In Q1 use confirm to ask the user if they want to see the prom again
let showPrompt = true
while (showPrompt) {
    age = prompt("Please enter your age:");
    if (canDrive(age)) {
        if (age < 0) {
            console.alert("Age cannot be negative.");
        } else if (canDrive(age)) {
            alert("You can drive.");
        } else {
            alert("You cannot drive yet.");
        }
    }
    showPrompt = confirm("Do you want to enter your age again?");
}

// 03 In previous qusetion , use console.error to log the error if the age enterd is negative
if (age < 0) {
    console.error("Error: Age cannot be negative.");
}

// 04 Write a program to cahnge the url to google.com (Redirection) if user enter a number greater than 4
let number = prompt("Please enter a number:");
if (number > 4) {
    window.location.href = "https://www.google.com";
}


// 05 Change the background page to cyan to violet or any other color based on the user input
let color = prompt("Please enter a color for the background (e.g., cyan, violet):");
if (color) {
    document.body.style.backgroundColor = color;
}