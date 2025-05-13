// For Loop
// A for loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition.
// The for loop is often used when the number of iterations is known beforehand.
console.log("For Loop: ")
for (let i = 0; i < 30; i++) {
    console.log(i + 1)
}

let sum = 4
let n = Number.parseInt(sum)
for (let i = 0; i < n; i++) {
    sum += i
}
console.log("Type", typeof sum, ",", "Sum of first " + n + " numbers is: " + sum)

// Homework 
// write a sample program to find factorial of a number using for loop
let num = 5
let factorial = 1
for (let i = 1; i <= num; i++) {
    factorial *= i
}
console.log("Factorial of " + num + " is: " + factorial)

// For in Loop
console.log("For in Loop: ")
let Marks = {
    "Math": 90,
    "English": 85,
    "Science": 95
}
for (let subject in Marks) {
    console.log(subject + " marks: " + Marks[subject])
}

console.log("For of Loop: work when obj is itratable ")
let arr = "Anuj"
for (let value of arr) {
    console.log("for of loops:", value)
}

// While loop and Do While loop
let a = 10
let i = 0
console.log("While Loop: ")
while (i < a) {
    console.log(i)
    i++
}