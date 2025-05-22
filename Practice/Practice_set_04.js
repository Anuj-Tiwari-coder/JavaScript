// 01 What will be the output of the following code:(console.log("Anuj\".length)).
const name = " ANUJ\ TIWARI"
console.log(name.length)

// 02 Explore the includes, satrtwith & Endwith function of string.
let str = "Hello World"
console.log(str.includes("Hello" || "World"))
console.log(str.startsWith("Hello"))
console.log(str.endsWith("World"))

// 03 Write a program to convert a give string into lower string.
console.log(name.toLowerCase())

// 04 Extract the amount out of this string "I have 1000$ in my bank account".
let str1 = "I have 1000 rs in my bank account"
let amount = str1.match(/\d+/)
console.log(`The amount is: ${amount}`)

// 05 Try to change 4th Character of a string, were you able to do it..
console.log(name.replace(name.charAt(), "Raman")) // This will not change the original string, but will return a new string with the character replaced
