console.log("variable and Data Types in JS");
// Var vs let vs const
var Var = "Variable Declaration: "; // var can be changed or override with the declaration but not recommended
const name = "Anuj"; // String: const can't be changed
const age = 25; // Number
let isStudent = true; // Boolean: let can be changed
isStudent = false; // Changing the value of isStudent
const hobbies = ["Rapping", "coding"]; // Array
const address = { city: "Mumbai", state: "Maharashtra" }; // Object
var b = "hello"
// let create a block scope
{
    var b = "I am inside a block"
    console.log(b);
}
console.log(Var, name, age, isStudent, hobbies, address, b);
