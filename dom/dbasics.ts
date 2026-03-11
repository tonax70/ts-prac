// dom stands for document object model
// dom let us interact with html documents
// can add, modify, delete element from html
// dom represent a tree of nodes, each node represent an element
// js can access and modify them dynamically

// if multiple different type of element wrapped in a large element like head, body, footer tag wrapped in html tag, they called child nodes
// if multiple element with the same type wrapped within a large element like multiple li wrapped in an ul or ol element, called "sibling nodes"

// querySelectorAll js selector, just put a valid css selector as string type
// querySelectorAll will select multiple element based on css selector, return empty NodeList if not find any
//return type: NodeList
//select element
document.querySelectorAll("div");

// select specific class
document.querySelectorAll(".aClass");

//select id
document.querySelectorAll("#anId");

//select element with a specific attribute
document.querySelectorAll("a[href='youtube.com']");

// can also select css combinator
document.querySelectorAll("body > div"); // select div elements that are direct children of the body element

// can also assign it to a variable (it will hold the reference to the dom object)
// it will return a collection of nodes (an array-like structure)

// querySelectorAll is powerful in js to select multiple elements and one

