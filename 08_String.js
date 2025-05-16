// what is Staring?
// String is a sequence of characters
// String is a primitive data type
// String is immutable
// String is a collection of characters
// String is a collection of 16-bit Unicode characters

// String Methods
console.log("String Methods in JS");
let str = "Hello";
console.log(str.length); // returns the length of the string

// 1. charAt() - returns the character at a specified index
console.log(str.charAt(0))

// 2. charCodeAt() - returns the Unicode of the character at a specified index
console.log(str.charCodeAt(0));

// 3. concat() - joins two or more strings
const name = "Anuj Tiwari";
console.log(str.concat(" ", `${name}`)); // Hello World Hello`);

// 4. indexOf() - returns the index of the first occurrence of a specified text in a string
console.log(str.indexOf("o"));

// 5. lastIndexOf() - returns the index of the last occurrence of a specified text in a string
console.log(str.lastIndexOf("l"));

// 6. localeCompare() - compares two strings in the current locale
console.log(str.localeCompare("Hello"));

// 7. match() - searches a string for a match against a regular expression, and returns the matches, as an Array object
console.log(str.match(/l/g));

// 8. repeat() - returns a string with a number of copies of a string
console.log(str.repeat(3))

// 9. replace() - replaces a specified value with another value in a string
console.log(str.replace("Hello", "Hi"));

// 10. search() - searches a string for a specified value and returns the position of the match
console.log(str.search("l"))

// 11. slice() - extracts a part of a string and returns a new string
console.log(str.slice(0, 2));

// 12. split() - splits a string into an array of substrings
console.log(str.split(" "))

// 13. startsWith() - checks whether a string begins with the characters of a specified string
console.log(str.startsWith("H"));

// 14. substr() - extracts a substring from a string, beginning at a specified location through the specified number of characters
console.log(str.substr(0, 2))

// 15. substring() - extracts the characters from a string between two specified indices
console.log(str.substring(0, 2))

// 16. toLocaleLowerCase() - converts a string to lowercase letters, according to the host's current locale
console.log(str.toLocaleLowerCase())

// 17. toLocaleUpperCase() - converts a string to uppercase letters, according to the host's current locale
console.log(name.toLocaleUpperCase())

// 18. toLowerCase() - converts a string to lowercase letters
console.log(name.toLowerCase())

// 19. toString() - returns the string representation of an object
console.log(name.toString())

// 20. toUpperCase() - converts a string to uppercase letters
console.log(name.toUpperCase())

// 21. trim() - removes whitespace from both sides of a string
console.log(name.trim())

// 22. valueOf() - returns the primitive value of a String object
console.log(name.valueOf())

// 23. includes() - checks whether a string contains the characters of a specified string
console.log(name.includes("Kailash"))

// 24. endsWith() - checks whether a string ends with the characters of a specified string
console.log(name.endsWith("Tiwari"))

// 25. fromCharCode() - converts Unicode values to characters
console.log(String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80));



// Strings
console.log("String in JS");

console.log(name, "Name With the length of:", name.length);
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// Tamplate literals
// Template literals are string literals allowing embedded expressions
// Template literals are enclosed by backticks (``) instead of single or double quotes
let graduation = "BSC in Computer Science"
let university = "University of Mumbai"
let year = 2023
let sentence = ` Hello My name is ${name} and I am Graduate from "${university}" in "${graduation}" in the year of ${year}`
console.log(sentence);

// Escape sequence Characters
// Escape sequence characters are used to represent certain special characters in strings
// Escape sequence characters are preceded by a backslash (\)
// Some common escape sequence characters are:

// 1. \' - single quote
console.log("\nEscape sequence characters");
console.log(`'I\'m a student of "${university}"'`);
// 2. \" - double quote
console.log(`"I \"Hold a degree of  ${graduation}"`);
// 3. \\ - backslash
console.log(`"I graduation year is\\ "${year}"`);
// 4. \n - new line
console.log(`"I am a student of "${university}"\nI am a student of "${graduation}"`);
// 5. \r - carriage return
console.log(`"I am a student of "${university}"\rI am a student of "${graduation}"`);
// 6. \t - tab
console.log(`"I am a student of "${university}"\tI am a student of "${graduation}"`);
// 7. \b - backspace
console.log(`"I am a student of "${university}"\bI am a student of "${graduation}"`);
// 8. \f - form feed
console.log(`"I am a student of "${university}"\fI am a student of "${graduation}"`);
// 9. \v - vertical tab
console.log(`"I am a student of "${university}"\vI am a student of "${graduation}"`);
// 10. \0 - null character
console.log(`"I am a student of "${university}"\0I am a student of "${graduation}"`);

