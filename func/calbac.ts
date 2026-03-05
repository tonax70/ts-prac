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
