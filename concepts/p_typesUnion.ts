import { printVarInfo } from "./_utils";

console.log("Just like javascript (a variable alwasys have \"any\" type but now with type safety we can specify certain types to ts variables");
let year: string | number;

year = "2026";
printVarInfo(year, "year");
year = 2026;
printVarInfo(year, "year");

console.log("note that with type string | number we cant use string method like toUppercase or toLowercase or similar methods beacuse they are not accessible in number type");