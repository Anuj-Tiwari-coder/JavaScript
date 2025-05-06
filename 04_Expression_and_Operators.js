// Expression and Operators
// Operators are special symbols that perform operations on variables and values.
// In JavaScript, there are several types of operators:
console.log("Operators in JavaScript: ")
// 1. Arithmetic Operators
let a = 10;
let b = 20;
console.log("Arithmetic Operators: ")
console.log("a + b = ", a + b) // Addition operator
console.log("a - b = ", a - b) // Subtraction operator
console.log("a * b = ", a * b) // Multiplication operator
console.log("a / b = ", a / b) // Division operator
console.log("a % b = ", a % b) // Modulus operator
console.log("a ** b = ", a ** b) // Exponentiation operator
console.log("++a = ", ++a) // Increment operator
console.log("--a = ", --a) // Decrement operator
console.log("a++ = ", a++) // Postfix increment operator
console.log("a-- = ", a--) // Postfix decrement operator
console.log("a = ", a) // Final value of a after postfix increment and decrement

// 2. Assignment Operators
let x = 5;
let y = 10;
console.log("Assignment Operators: ")
console.log("x = ", x) // Assignment operator
x += 5; // Add and assign
console.log("x += 5: ", x) // x = x + 5
x -= 2; // Subtract and assign
console.log("x -= 2: ", x) // x = x - 2
x *= 3; // Multiply and assign
console.log("x *= 3: ", x) // x = x * 3
x /= 2; // Divide and assign
console.log("x /= 2: ", x) // x = x / 2
x %= 3; // Modulus and assign
console.log("x %= 3: ", x) // x = x % 3
x **= 2; // Exponentiation and assign
console.log("x **= 2: ", x) // x = x ** 2
x &= 1; // Bitwise AND and assign
console.log("x &= 1: ", x) // x = x & 1
x |= 2; // Bitwise OR and assign
console.log("x |= 2: ", x) // x = x | 2
x ^= 3; // Bitwise XOR and assign
console.log("x ^= 3: ", x) // x = x ^ 3
x <<= 1; // Left shift and assign
console.log("x <<= 1: ", x) // x = x << 1
x >>= 1; // Right shift and assign
console.log("x >>= 1: ", x) // x = x >> 1
x >>>= 1; // Unsigned right shift and assign
console.log("x >>>= 1: ", x) // x = x >>> 1

// 3. Comparison Operators
console.log("Comparison Operators: ")
console.log("a == b: ", a == b) // Equal to operator
console.log("a === b: ", a === b) // Strict equal to operator
console.log("a != b: ", a != b) // Not equal to operator
console.log("a !== b: ", a !== b) // Strict not equal to operator
console.log("a > b: ", a > b) // Greater than operator
console.log("a < b: ", a < b) // Less than operator
console.log("a >= b: ", a >= b) // Greater than or equal to operator
console.log("a <= b: ", a <= b) // Less than or equal to operator

// 4. Logical Operators
console.log("Logical Operators: ")
// sourcery skip: remove-redundant-boolean
console.log("true && false: ", true && false) // Logical AND operator
console.log("true || false: ", true || false) // Logical OR operator
console.log("!true: ", !true) // Logical NOT operator

// 5. Bitwise Operators
console.log("Bitwise Operators: ")
console.log("a & b: ", a & b) // Bitwise AND operator
console.log("a | b: ", a | b) // Bitwise OR operator
console.log("a ^ b: ", a ^ b) // Bitwise XOR operator
console.log("~a: ", ~a) // Bitwise NOT operator
console.log("a << 1: ", a << 1) // Left shift operator
console.log("a >> 1: ", a >> 1) // Right shift operator
console.log("a >>> 1: ", a >>> 1) // Unsigned right shift operator

// 6. Ternary Operator
console.log("Ternary Operator: ")
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // Ternary operator
console.log("Can vote: ", canVote) // Output: Yes

// 7. Typeof Operator
console.log("Typeof Operator: ")
console.log("typeof a: ", typeof a) // Output: number
console.log("typeof b: ", typeof b) // Output: number
console.log("typeof canVote: ", typeof canVote) // Output: string
console.log("typeof true: ", typeof true) // Output: boolean

// 8. Instanceof Operator
console.log("Instanceof Operator: ")
console.log("[] instanceof Array: ", [] instanceof Array) // Output: true
console.log("{} instanceof Object: ", {} instanceof Object) // Output: true
console.log("function(){} instanceof Function: ", function () { } instanceof Function) // Output: true
console.log("new Date() instanceof Date: ", new Date() instanceof Date) // Output: true
console.log("new RegExp() instanceof RegExp: ", new RegExp() instanceof RegExp) // Output: true
console.log("new Error() instanceof Error: ", new Error() instanceof Error) // Output: true
console.log("new Map() instanceof Map: ", new Map() instanceof Map) // Output: true
console.log("new Set() instanceof Set: ", new Set() instanceof Set) // Output: true
console.log("new WeakMap() instanceof WeakMap: ", new WeakMap() instanceof WeakMap) // Output: true
// console.log("new WeakSet() instanceof WeakSet: ", new WeakSet() instanceof WeakSet) // Output: true

// 9. Comma Operator
console.log("Comma Operator: ")
let c = (a = 1, b = 2, a + b); // Comma operator
console.log("c: ", c) // Output: 3

// 10. Spread Operator
console.log("Spread Operator: ")
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]; // Spread operator