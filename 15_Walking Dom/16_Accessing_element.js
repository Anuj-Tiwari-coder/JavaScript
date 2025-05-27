replit_link = "https://replit.com/@anujtiwari0043/Accessing-the-Elements"
console.log("ReplitLink: " + replit_link);

let num = 1000000
let fromInia = true
let fromUS = true
let user = "India" || "US"
if (user == "India" && fromInia) {
    num = num.toLocaleString("en-IN"); // "1,000,000"
} else if (user == "US" && fromUS) {
    num = num.toLocaleString("en-US"); // "1,000,000"
}
else {
    num = num.toLocaleString("en"); // "1,000,000"
}
console.log("Formatted Number: " + num); // Output: "1,000,000"
// Accessing Elements