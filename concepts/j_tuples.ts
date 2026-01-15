import { printVarInfo } from "./_utils";

console.log("A tuple is a pre-defined arrays with each element being pre assigned to a type");
let ourTuples: [boolean, string, number];
ourTuples = [true, "toan", 7];
printVarInfo(ourTuples, "ourTuples");
console.log("initialized tuples incorrectly which throws an error");
console.log("if we trying to do push soething to the tuples as 4th elements, we have no type safety for the 4th element so");
console.log("we also have read only tuples as a tuple is also an array");
console.log("so, now when we are tying to push an element to a readonly tuple it will throw an error");