// 01. Create a Variable of type string and add number
let a = "Anuj"
console.log(a + 1234)

// 02. Use typeof operator to check the type of string in last quesation
console.log(typeof a)

// 03. Create a const variable and try to change it to hold number  later
const b = {
    name: "Anuj",
    lastname: "Tiwari",
    age: [], //empty set for decleeration
}
b["age"] = 23
console.log(b)


// 04. Try to add new key to the object created in 03 were you can able to do it
{
    let b = {
        name: "Anuj",
        age: 25,
    }
    console.log(b)
}

// 05. Write a program to word meanig dict of 5 words 
const dictionary = {
    "Anuj": "This is my name",
    23: "My age",
    "Bsc": "That's my Graduation",
    "Compute Science": "My field of study",
    "CGPA": "My CGPA" + 6.06
}
console.log(dictionary)
