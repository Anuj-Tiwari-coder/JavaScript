// Arrays
// Arrays are a special type of object
// Arrays are a collection of data
// Arrays are a collection of values
// Arrays are a collection of elements
// Arrays are a collection of items
// Arrays are a collection of variables

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


// // Array Methods
// // Array methods are functions that can be called on arrays
// // Array methods are functions that can be used to manipulate arrays
// // Array methods are functions that can be used to perform operations on arrays
// // Array methods are functions that can be used to perform actions on arrays
// // Array methods are functions that can be used to perform tasks on arrays
// console.log("Array Methods")
// let b = a.toString()  // toString is a method that converts an array to a string
// console.log("Typeof a:", typeof (a))
// console.log("a.toString in array:", b, "\n", "Type of: ", typeof (b))

// let c = a.join(" _")  // join is a method that converts an array to a string with a specified separator
// console.log(" a.join array", c)

// let d = a.pop()  // pop is a method that removes the last element from an array and returns it
// console.log("a.pop in array", a, "pop element", d)

// let e = a.push(10)  // push is a method that adds one or more elements to the end of an array and returns the new length of the array
// console.log("a.push in array", a, "push element", e)

// let f = a.shift()  // shift is a method that removes the first element from an array and returns it
// console.log("a.shift in array", a, "shift element", f)

// let g = a.unshift(0)  // unshift is a method that adds one or more elements to the beginning of an array and returns the new length of the array
// console.log("a.unshift in array", a, "unshift element", g)


// let i = delete a[2]  // delete is a method that removes an element from an array via indexing
// console.log("delete[2] in array", a, "delete element", i, ",delete value", a[2])

// let j = [11, 12, 13, 14, 15]
// let k = a.concat(j)  // concat is a method that merges two or more arrays
// console.log("concat in array", a, j, "\n", "concat element", k)
// console.log(k.length)

// let h = a.splice(2, 1, 21, 22, 23)  // splice is a method that adds or removes elements from an array
// console.log("a.splice in array", a, "splice element", h)

// let l = a.sort()  // sort is a method that sorts the elements of an array in place and returns the sorted array
// const compare = (a, b) => a - b
// a.sort(compare)  // sort is a method that sorts the elements of an array in place and returns the sorted array
// console.log("a.sort in array", a, "\n", "sort element", l)

// let m = a.reverse()  // reverse is a method that reverses the elements of an array in place and returns the reversed array
// console.log("a.reverse in array", a, "\n", "reverse element", m)

// let n = a.slice(2, 5)  // slice is a method that returns a shallow copy of a portion of an array into a new array object
// console.log("a.slice in array", a, "\n", "slice element", n)

// Loops in Array 
// Loops are used to iterate over the elements of an array
// Loops are used to perform actions on each element of an array
// Loops are used to perform tasks on each element of an array
// Loops are used to perform operations on each element of an array
console.log("\nLoops in Array")
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < num.length; i++) {
    console.log("for loop:\n", "Index: ", i, "Value: ", num[i],)
}
console.log("\n")
num.forEach((element, index) => {
    console.log("forEach loop:\n", "Index: ", index, "Value: ", element * element)
})

// Arry from 
// Array.from() is a method that creates a new array from an array-like or iterable object
// Array.from() is a method that creates a new array from an array-like or iterable object
// Array.from() is a method that creates a new array from an array-like or iterable object
// Array.from() is a method that creates a new array from an array-like or iterable object

let str = "Hello World"
console.log("\nTypeof str:", typeof str)
let arr = Array.from(str)
console.log("\nArray.from() in array", arr, "\n", "Type of: ", typeof (arr))

// for...off 
// for...of is a loop that iterates over the values of an iterable object
console.log("\n")
for (let value of arr) {
    console.log("for...of loop:\n", "Value: ", value)
}

// for...in`
// for...in is a loop that iterates over the keys of an object
// for...in is a loop that iterates over the properties of an object


console.log("\n")
for (let key in num) {
    console.log("for...in loop:\n", "Key: ", key, "Value: ", num[key])
}
