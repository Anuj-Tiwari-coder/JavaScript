// 01. Use logical operators to check user lies between 10 and 20.
let userAge = 15
if (userAge >= 10 && userAge <= 20) {
    console.log("User age is between 10 and 20")
}
else {
    console.log("User age is not between 10 and 20")
}

// 02. Demonstrate the use of Switch case statement.
let Week = "Sunday"
switch (Week) {
    case "Monday":
        console.log("Today is Monday")
        break
    case "Tuesday":
        console.log("Today is Tuesday")
        break
    case "Wednesday":
        console.log("Today is Wednesday")
        break
    case "Thursday":
        console.log("Today is Thursday")
        break
    case "Friday":
        console.log("Today is Friday")
        break
    case "Saturday":
        console.log("Today is Saturday")
        break
    case "Sunday":
        console.log("Today is is Holiday")
        break
}

// 03. Write a js code to find wheathere a number divide by 2 and 3.
let number = 6
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Number is divisible by both 2 and 3")
}
else if (number % 2 === 0) {
    console.log("Number is divisible by 2")
}
else if (number % 3 === 0) {
    console.log("Number is divisible by 3")
}
else {
    console.log("Number is not divisible by either 2 or 3")
}

// 04. Write a js code to find wheathere a number divide by either 2 or 3.
let num = 6
if (num % 2 === 0 || num % 3 === 0) {
    console.log("Number is divisible by either 2 or 3")
}
else {
    console.log("Number is not divisible by either 2 or 3")
}


// 05. Using ternary operator check if  person can derve a car or not.
let age = 20
let person = (age > 18 ? "can drive" : "cannot drive")
console.log(person)