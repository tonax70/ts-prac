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