// Map 
// Map create new array
// Map is a method that creates a new array with the results of calling a provided function on every element in the calling array
// Create new array by performing an operation on each element of the array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Map in array")
let a = array.map((value, index) => {
    console.log("Map use in array", value, " Index: ", index)
    return value + 1
})
console.log("old array", array)
console.log("Map Created new array", a)

// Filter
// Filter is a method that creates a new array with all elements that pass the test implemented by the provided function\
// Filter an array with value that passes a test created new array

let b = array.filter((value, index) => {
    return value > 6
})
console.log("Filter in array showing value > 6", array, " Filtered array", b)

// Reduce
// Reduce is a method that executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// Reduce  an array to a single value
let c = array.reduce((A1, A2) => {
    return A1 + A2
})
console.log("Reduce in array showing sum of all elements", array, " Reduced array", c)