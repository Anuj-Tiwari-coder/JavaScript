// // Arrays
// // Arrays are a special type of object
// // Arrays are a collection of data
// // Arrays are a collection of values
// // Arrays are a collection of elements
// // Arrays are a collection of items
// // Arrays are a collection of variables

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let index = 0
// for (index in a) {
//     console.log("Index: ", index, "Value: ", a[index])
// }
// console.log("This is an intigers array", a, "\n", "Type of: ", typeof (a))

// // Changing the value of an array
// // a[0] = 20  usingig index
// console.log("This is an intigers array", a, "\n", "Type of: ", typeof (a))
// let append = a.push(10)
// console.log("Append: ", append)
// console.log("This is an intigers array", a, "\n", "Type of: ", typeof (a))
// console.log("Length of array: ", a.length)


// Array Methods
// Array methods are functions that can be called on arrays
// Array methods are functions that can be used to manipulate arrays
// Array methods are functions that can be used to perform operations on arrays
// Array methods are functions that can be used to perform actions on arrays
// Array methods are functions that can be used to perform tasks on arrays
console.log("Array Methods")
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = a.toString()  // toString is a method that converts an array to a string
console.log("Typeof a:", typeof (a))
console.log("a.toString in array:", b, "\n", "Type of: ", typeof (b))

let c = a.join(" _")  // join is a method that converts an array to a string with a specified separator
console.log(" a.join array", c)

let d = a.pop()  // pop is a method that removes the last element from an array and returns it
console.log("a.pop in array", a, "pop element", d)

let e = a.push(10)  // push is a method that adds one or more elements to the end of an array and returns the new length of the array
console.log("a.push in array", a, "push element", e)

let f = a.shift()  // shift is a method that removes the first element from an array and returns it
console.log("a.shift in array", a, "shift element", f)

let g = a.unshift(0)  // unshift is a method that adds one or more elements to the beginning of an array and returns the new length of the array
console.log("a.unshift in array", a, "unshift element", g)