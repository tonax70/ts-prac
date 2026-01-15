import { printVarInfo } from "./_utils";

console.log("Now we can declare the type for typescript variables pretty much similar to java");
const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
printVarInfo(names, "names");

console.log("Now we can also declare a \"readonly \" array");

const namess: readonly string[] = ["Dylan"];
//namess.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
console.log("//namess.push(\"Jack\"); // Error: Property 'push' does not exist on type 'readonly string[]'.");