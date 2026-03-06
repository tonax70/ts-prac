// callback function uses as a param of other functions to invoke it at a specific point

function evaluate(str:string, fn:(s:string)=> boolean) {
    if (fn(str)) return "the GOAT";
    return "fail";
}

console.log(evaluate("sen", (s:string)=> s==="sen"));

// forEach
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(n, idx, arr){
sum+=n;
console.log("value: " + n + " | index: " + idx + "| arr: " + arr)});


console.log(sum + " " + numbers.toString());


// functions are first class citizen in javascript unlike java
/* can:
store as available
passed as argument of another function
can be returned from a function
can be stored in a data object
*/
//type 1: takes a function as argument
function OOA (arr:number[], fn:(n:number) => number) { // operations on array

    let result = [];
    
    for (let n of arr) {
        result.push(fn(n));
    }

    return result;

}

// can abstract away the operation and changes between different code blocks
function x2 (number:number) {
    return number * 2;
}

console.log(OOA(numbers, x2));

// type 2 : return a function
function fahh (bars: string) {
    return function (statement: string) {
        console.log(bars + " " + statement);
    }
}

const yap = fahh("SKS");
yap("is the GOAT");

// the map method
// map uses to apply a given operation for each element within an array
// the method doesnt modify the array instead it return a new array

// try build the map function fr
function manualMap (arr:any[], fn:(arg:any) => any ) {
    const resultArray:any = [];
    arr.forEach(function(element) {
        resultArray.push(fn(element))
    })
    return resultArray;
}
const classifying = (num:number) => !!(num%2)? "even number" : "odd number";
console.log(manualMap(numbers, classifying));
console.log("is equiv to: " + numbers.map(classifying))

// log array using map just like foreach
console.log(numbers.map((element, index, array) => {
    if (index === 2) array.splice(index,1);
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
}));
//filter method
// uses to create an array that returns a new filtered array based on specific criteria
// the callback  
const isOdd = (num:number) => !!(num%2);

// the filter method with parse truthy falsy values to boolean
function manualFilter (arr:any[], fn:(arg:any) => any) {
    const result = [];
    for (let item of arr) {
        if (Boolean(fn(item))) result.push(item);
    }
    return result;
}

console.log("Manual filter: " + manualFilter(numbers, isOdd));
console.log("Official filter: " + numbers.filter(isOdd));   

// filter object to perform search function
const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];
console.log(JSON.stringify(developers.filter((person) => (isOdd(person.age))), null, 2));

// the reduce method
// allow us to process an array and condense it into a value
// sum numbers using reducers

console.log(numbers.reduce((acc, num) => acc + num), 0);


// method chaining - ive played these games before 🗣️🔥🔥🔥
// calc sum of tripled odd number in array
console.log(numbers.map((n) => n*3).filter(isOdd).reduce((acr, n) => acr + n)); 


//sort method
/*
sort method uses to sort an array of element alphabetically or  lexicographically
that means the sort will convert all of them to string instead of comparing numbers like we expected
*/
const stuffedNumber = [25,16,37,7,56,350];
// we instead see it only sort based on the equiv first unicode character converted from that number
console.log("Sort with no sorting callback: " + stuffedNumber.sort());
// the wrong sorted array because it converts the first number to their utf-16 (unicode) equiv value like 65 > A, 66 > B, 67 > C etc...
// the solution is to provide a compare function

console.log("Sorting with compare function increment: " + stuffedNumber.sort((a, b) => a - b));
console.log("Sorting with compare function decrement: " + stuffedNumber.sort((a, b) => b - a));
// notice that the sort method sort the original array and return the reference of the original array, no copy is being made


//every() and some() methods
// sometimes I might want to check if all or some elements meets a specific criteria
// the every() method will check all elements within the array and evaluate if they meets that specific criteria defined in the callback function
// if all aligned it will return true
// if one element fail it will break immediately and return false
console.log("Check if every number is even or not within the array: " + stuffedNumber.filter((a)=> !!(a%2)).every(a=> !!(a%2)));

// the some() method instead find at least once element pass the criteria and return true
// if none, return false
console.log("Check at least an odd number exist: " + stuffedNumber.some(a => !(a%2)));
console.log("if performing some() method on an empty array to check even number: " + [].some(a=>!!(a%2)));
console.log("If using every() method to an empty array to check if every element is undefined: " + [].every(a=>a===undefined))