let t = document.body.firstElementChild.firstElementChild;
console.log(t.rows); // collection of tr elements
console.log(t.rows[0]); // collection of tr elements by indexing
console.log(t.rows[1].rowIndex); // collection of tr elements by indexing
console.log(t.caption); // refer to a caption
console.log(t.tHead); // refer to head of the table
console.log(t.tHead.firstElementChild);
console.log(t.tFoot);  // if it's peresent than only you get the output || null
console.log(t.tBodies); // Collection of body elements
// collection of td aand th

