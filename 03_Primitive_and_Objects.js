// Primitive Data Type and Objects
// Primitive data types
// There are 7 types of data types in JavaScript
// nn ss u bb => null,  number, string, symbol,  boolean, bigint, undefined,

let n1 = null // null
let n2 = 12345  // number
let s1 = "Anuj" // string
let s2 = Symbol("I am a nice symbol") // Symbol
let b1 = true // boolean it can also false
let b2 = BigInt(1234567890) // bigint
let u // undefined
console.log(n1, n2, s1, s2, u, b1, b2)
console.log(typeof n1, typeof n2, typeof s1, typeof s2, typeof u, typeof b1, typeof b2)

// Objects in JS
// Objects are non-primitive data types
// Objects are mutable
// Objects are reference data types
// Objects are collections of key-value pairs
// Objects can be created using object literal or constructor function
// Objects can contain any data type
// Objects can contain functions
// Objects can contain other objects

// Object literal
const person = {
    name: "Anuj",
    age: 25,
    isStudent: true,
    hobbies: ["Rapping", "coding"],
    address: { city: "Mumbai", state: "Maharashtra" },
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
}
console.log(person)


// Constructor function
function Person2(name, age, isStudent, hobbies, address) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
    this.hobbies = hobbies;
    this.address = address;
    this.greet = function () {
        console.log("Hello, my name is " + this.name);
    }
}
console.log(Person2)

