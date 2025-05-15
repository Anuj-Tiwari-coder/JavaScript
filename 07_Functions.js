// Function in js 

let a = 10
let b = 20
let c = 30
console.log("Sum of a, b, c is: ", a + b + c)

console.log("Function in js");
// Function
function oneplus(x, y) {
    console.log("Done")
    return Math.round(1 + (x + y) / 2)
}
let x = 1
let y = 2
let z = 3

console.log("Avrage of a, b,c is: " + oneplus(x, y))
console.log("Avrage of b, a, c is: " + oneplus(y, x,))
console.log("Avrage of a, b, c is: " + oneplus(z, x,))