import { printVarInfo } from "./_utils";

let decimal: number = 67;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14159;

decimal = 0b1010;

printVarInfo(decimal, "decimal");
printVarInfo(hex, "hex");
printVarInfo(binary, "binary");
printVarInfo(octal, "octal");
printVarInfo(float, "float");
console.log(`
    // again the types cant be re-assigned to a different type\n
    // the types number can be dec, hex, bin, oct or float\n
    // important note: since all number sub-type is within the number type,\n
    // we can assign a different umber type t the previous type
    `);