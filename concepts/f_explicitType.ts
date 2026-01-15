import { printVarInfo } from "./_utils";

console.log("Expilicit typing: review all types learned");

let booleanType: boolean = true;
let dec: number = 1;
let hex: number = 0xfa;
let bin: number = 0b1010;
let oct: number = 0o123;
let floatingPoint: number = 131.4;
let word: string = "hello";
let bigINT: bigint = 34256347456734623456346345734n;
let unique: symbol = Symbol("toan");

printVarInfo(booleanType, "let booleanType: boolean = true;");
printVarInfo(dec, "let dec: number = 1;");
printVarInfo(hex, "let hex: number = 0xfa;");
printVarInfo(bin, "let bin: number = 0b1010;");
printVarInfo(oct, "let oct: number = 0o123;");
printVarInfo(floatingPoint, "let floatingPoint: number = 131.4;");
printVarInfo(word, "let word: string = \"hello\";");
printVarInfo(bigINT, "let bigINT: bigint = 34256347456734623456346345734n;");
printVarInfo(unique, "let unique: symbol = Symbol(\"toan\");");


