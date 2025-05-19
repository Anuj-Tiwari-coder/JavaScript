// Arrays
// Arrays are a special type of object
// Arrays are a collection of data
// Arrays are a collection of values
// Arrays are a collection of elements
// Arrays are a collection of items
// Arrays are a collection of variables

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let index = 0
for (index in a) {
    console.log("Index: ", index, "Value: ", a[index])
}
console.log("This is an intigers array", a, "\n", "Type of: ", typeof (a))

// Changing the value of an array
// a[0] = 20  usingig index
console.log("This is an intigers array", a, "\n", "Type of: ", typeof (a))
let append = a.push(10)
console.log("Append: ", append)
console.log("This is an intigers array", a, "\n", "Type of: ", typeof (a))
console.log("Length of array: ", a.length)


