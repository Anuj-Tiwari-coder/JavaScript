// Methods of console.log 
// Types of consloe 
console.log("Console Methods:", console) // console.log("Console Methods:", console)
console.error("Hello World") // console.err is used to print error messages
console.assert(2 === 2, "This is an assertion error") //console.assert is used to print assertion error messages
console.warn("This is a warning message") // console.warn is used to print warning messages
console.info("This is an info message") // console.info is used to print info messages
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]) // console.table is used to print data in tabular format
console.time("For loop") // console.time is used to start a timer
// Let compare the speed of loop
let i = 0
for (; i < 100; i++) {
    console.log(143)
}
console.timeEnd("For loop") // console.timeEnd is used to end a timer
console.time("while loop") // console.time is used to start a timer
while (i < 100) {
    console.log(143)
    i++;
}
console.timeEnd("while loop") // console.timeEnd is used to end a timer

console.dir({ name: "John", age: 30 }) // console.dir is used to print the properties of an object

console.trace("This is a trace message") // console.trace is used to print the stack trace of the code
console.group("Group") // console.group is used to group messages together
console.log("This is a message inside a group") // console.log is used to print messages
console.groupEnd() // console.groupEnd is used to end a group
console.count("Count") // console.count is used to count the number of times a message has been printed
console.clear() // console.clear is used to clear the console

