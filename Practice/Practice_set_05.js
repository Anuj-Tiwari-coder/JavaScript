//  Create an array of number and takes input from the user to add a number to the array
// const prompt = require("prompt-sync")
let numbers = [1, 2, 3, 4, 5, 60, 30, 20, 10, 50, 100]
// let a = prompt("Enter Your name: ")
// a = numbers.parseInt(a)
// Array.push(a)
// console.log(Array)

// keep adding numbers to the array until the user enters 0
// do {
//     a = prompt("Enter Your name: ")
//     a = numbers.parseInt(a)
//     Array.push(a)
//     console.log(Array)
// } while (a != 0)
// console.log(Array)

// filter for numbers divisible by 10 from a given array
let b = numbers.filter((num) => {
    return num % 10 == 0
})
console.log(b)
// Create an of square of given numbers
let c = numbers.map((num) => {
    return num * num
})
console.log(c)

// use reduce to calculate the factorial of a given number from an array of first n natural numbers(n being the number given number whose factorial need to be calculated) 
let d = numbers.reduce((acc, num) => {
    return acc * num
}, 1)
console.log(d)