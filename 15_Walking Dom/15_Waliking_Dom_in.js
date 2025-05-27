// Walking Don in js

// The DOM Tree 
// The DOM (Document Object Model) represents the structure of a web page as a tree of objects.


// Node Relationships
// 1. Parent Node: A node that contains other nodes.
// 2. Child Node: A node that is contained within another node.
// 3. Sibling Node: Nodes that share the same parent.

// The Root-Node
// Root Node: The topmost node in the tree, typically the <html> element.

// Locating Dom Nodes
// We locate dom-nodes in three common ways.
// Selecting them in the document
// Querying the DOM with document.querySelector(selectors)
// $0
// $0 returns the current selected element or JavaScript object.
// document.querySelector(selectors) returns the first Element within the document that matches the specified selector, or group of selectors.

// Traversing the DOM
// Traversing the DOM means navigating through the nodes in the DOM tree.
// We can traverse the DOM using properties like parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling.
// Example of traversing the DOM
let root = document.documentElement; // The root node
let body = document.body; // The body node
let firstChild = body.firstChild; // The first child of the body
let lastChild = body.lastChild; // The last child of the body
let nextSibling = firstChild.nextSibling; // The next sibling of the first child
let previousSibling = lastChild.previousSibling; // The previous sibling of the last child