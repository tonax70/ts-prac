// argument object 
// normally a function can accept a list of arguments
function say(w1:string, w2:string) {
console.log(w1 + " " + w2);
} 

say("hello", "sen");

// but we can throw whatever arguments count if we want

say("hello", "sen", "is", "the", "best") // of course typescript will flag it but it's not the case with javascript
// instead of throwing error like other language like java or lint check like typescript, it's just accepting the first n defined argument

// those are called variadic functions
// in each function we have a secret object called "arguments"
//notice that argument object only exist in non-arrow functions but yet the arrow function also accept only the first defined variables

function explore(a:any, b: any, c:any) {

    console.log(typeof arguments)
    for (let arg of arguments) {
        console.log(arg)
    }
}

explore(1,2,3,4,5,6,7,8,9,0);

/*
In JavaScript, the arguments object is "array-like" because it possesses some characteristics of an array but lacks others. It was designed this way primarily to provide access to all arguments passed to a function without the overhead or full functionality of a true array, especially in older JavaScript versions. 
Stack Overflow
Stack Overflow
 +3
What Makes it "Array-Like"?
The arguments object behaves like an array in two key ways:
Indexed elements: Individual arguments can be accessed using zero-based numerical indices (e.g., arguments[0], arguments[1]).
length property: It has a length property that indicates the number of arguments passed to the function. 
MDN Web Docs
MDN Web Docs
 +1
Why Isn't it a True Array?
The arguments object does not inherit from Array.prototype, so it does not have built-in array methods like forEach(), map(), push(), or pop(). Attempting to use these methods directly on the arguments object will result in a TypeError. 
Stack Overflow
Stack Overflow
 +1
One potential reason for this design choice was performance and memory usage in older JavaScript engines, as creating a full array for every function call with variable arguments (variadic functions) could be inefficient. The arguments object provided a lightweight mechanism for accessing these values.
*/

function hasFox() {
    return [...arguments].includes("fox")? "YOOOOO THAT'S FIRE " + arguments[2] : "aw man cooked";
}

console.log(hasFox("cat", "dog", "fox", "chicken"));

// arguments vs rest param ===========================================================================================================================
// we can use rest param t define it accepts a series of arguments instead of using the "secret" argument object to improve readability
function logArgs(...args:any) {
  for (const arg of args) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);

// now instead of direct access the argument object we put everything into an array named arg instead

// we can just takes the important values as defined parameter and leaves the rest in a huge array

function exampleFunction(a, b, ...restOfArgs) {
  // some code here
}

function anotherFunction(x, y, ...theArgs) {
  // some code here
}

// but we can only be able to use the rest param once, more than 1 wont work

// function badFunction(...args, ...moreArgs) {
////  some code here
// }

// the different between the argument and the ...rest method is that the bare-bone argument is array like while the rest method is now a real array

// unique var arr
// unite unique sorted array

function uniteUnique () {
  const collected = [];
  for (let arg of arguments) {
    collected.push(...arg);
  }
  return [...new Set(collected)]
}


// random password gen
function generatePassword (len:number) {
  let ran = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pas = "";
  for (let i = 0; i < len; i++)  {
    pas += ran[Math.floor(Math.random()*ran.length)];
  }
  return pas;
}

let password = generatePassword(12);
console.log("Generated password: " + password);

// all numbers
function sumAll (arrTwo:number[]) {
  let sortedTwo = arrTwo.sort((a, b) => a - b);
  let sum = 0;
  for (let i = sortedTwo[0]; i <= sortedTwo[1]; i++) {
    sum+=i;
  }
  return sum;
}


// html converter
function tr(ch:string) {
  switch(ch) {
    case "&" : return "&amp;";
    case "<" : return "&lt;";
    case ">" : return "&gt;";
    case '"' : return "&quot;";
    case "'" : return "&apos;";
  }
  return ch;
}

function convertHTML (str:string) {
  let result = "";
  for (let ch of str) {
    result += tr(ch);
  }
  return result;
}

// sum odd fib
function sumFibs  (n:number) {
  let prevv = 0;
  let prev = 1;
  let current = 0;
  let sum = 1;
  while (current <= n) {
    current = prevv + prev;
    prevv = prev;
    prev = current;
    if (current <= n && !!(current%2)) sum+= current;
  }
return sum;
}

console.log(sumFibs (1))


