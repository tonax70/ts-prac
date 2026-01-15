import { printVarInfo } from "./_utils";

console.log("Type: any - basically tell the compiler to stop checking types, back to javascript babe\n");
let anytype: any = true;
printVarInfo(anytype, "let anytype: any = true;");
anytype = 1;
printVarInfo(anytype, "anytype = 1;");
anytype = "string";
printVarInfo(anytype, "anytype = \"string\";");

//questionable pattern
 let v: any = true;
v = "string"; // no error as it can be "any" type
let target: any = Math.round(v); // no error as it can be "any" type

console.log(`
  When to use any:
  
  When migrating JavaScript code to TypeScript
  When working with dynamic content where the type is unknown
  When you need to opt out of type checking for a specific case
  `);

console.log(`
  //questionable pattern
  let v: any = true;
  v = "string"; // no error as it can be "any" type
  let target: any = Math.round(v); // no error as it can be "any" type
  `);
console.log(target + " - oh, if you round a string it will return NaN");

console.log("Type: unknown - any but with type checking\n");

console.log(`
  The never type represents the type of values that never occur.
  
  It's used to indicate that something never happens or should never happen.
  
  When to use never:
  
  For functions that will never return a value
  In type guards that should never match
  For exhaustive type checking in switch statements
  In generic types to indicate certain cases are impossible 
  `);

console.log(`
  Type: undefined & null
  In TypeScript, both undefined and null have their own types, just like string or number.
  
  By default, these types can be assigned to any other type, but this can be changed with TypeScript's strict null checks.
  
  Key points about undefined and null:
  
  undefined means a variable has been declared but not assigned a value
  null is an explicit assignment that represents no value or no object
  In TypeScript, both have their own types: undefined and null respectively
  With strictNullChecks enabled, you must explicitly handle these types
  `);
