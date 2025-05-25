// Window, Dom, Bom
// 1. Window Object
// 2. Document Object Model (DOM)
// 3. Browser Object Model (BOM)


// 1. Window Object
// The Window object represents the browser window.
// It is the global object in the browser environment and provides methods and properties to interact with the browser window.
console.warn("Use in the browser to see the output message\n", "Because Window Object doesn't Work in terminal or Node.js")
Replit_link = "https://replit.com/@anujtiwari0043/14-Window-Dom-and-Bom"
console.log("Replit Link:", Replit_link)
// Example of using the Window object
console.log("Window Object Example:");
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);
console.log("Window Location:", window.location.href);
console.log("Window Title:", document.title);


// 2. Document Object Model (DOM)
// The DOM is a programming interface for HTML and XML documents.
// It represents the structure of a document as a tree of objects, allowing scripts to manipulate the content and structure of the document.
console.warn("Use in the browser to see the output message\n", "Because DOM doesn't Work in terminal or Node.js")
console.log("Document Object Model (DOM) Example:");
console.log("Document Title:", document.title);
console.log("Document URL:", document.URL);
console.log("Document Body:", document.body);
// Example of manipulating the DOM
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph added to the document.";
document.body.appendChild(newElement);


// 3. Browser Object Model (BOM)
// The BOM provides methods and properties to interact with the browser outside of the document.
console.warn("Use in the browser to see the output message\n", "Because BOM doesn't Work in terminal or Node.js")
console.log("Browser Object Model (BOM) Example:");
console.log("Navigator User Agent:", navigator.userAgent);
console.log("Navigator Language:", navigator.language);
console.log("Screen Width:", screen.width);
console.log("Screen Height:", screen.height);


// Example of using BOM to open a new window
const newWindow = window.open("", "New Window", "width=400,height=300");
newWindow.document.write("<h1>This is a new window opened using BOM</h1>");
// Close the new window after 3 seconds
setTimeout(() => {
    newWindow.close();
}, 3000);
