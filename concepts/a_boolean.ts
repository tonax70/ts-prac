import { printVarInfo } from "./_utils";

let isActive: boolean = true; // the type is boolean
// isActive = 1; cannot do because typescript will complain a number cant be assigned to a boolean variable
let hasPermission = false; // it will automatically infer type as boolean, just like js
// hasPermission = 1; // cannot do because once it initialized as a type, the type can't be changed in the next assignment
printVarInfo(isActive);
console.log("// isActive = 1; cannot do because typescript will complain a number cant be assigned to a boolean variable");
printVarInfo(hasPermission);
console.log("// hasPermission = 1; // cannot do because once it initialized as a type, the type can't be changed in the next assignment");

