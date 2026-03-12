// when working with dom we often use `navigator`, `window`, `document` interface. and interface is a collection of methods and properties to define a particular obj
// navigator interface provides browser information

console.log(navigator.userAgent);  // in this case we run it using nodejs so it should show Nodejs/22 text

console.log(navigator.language); // return the languages of the browser (in this case node.js lang config)
console.log(navigator.languages); // return an array of saved languages in that browser

// the window in interface represent the browser window that contains the dom elements
// provides methods to interact with browser window 
//console.log(window.innerWidth); // show width of browser window    // since a window is technically doesn't exist in nodejs because we didn't have any window at all