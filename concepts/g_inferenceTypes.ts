import { printVarInfo } from "./_utils";

console.log("Inference type: typescript can automatically infer the type base on the initial value, just like javascript");
let bool = true;
let name = "toan";
let score = 100;
let boolArr = [true, true, false];
let test = [1, true, "yes"];
let stringArr = ["aaa", "bbb", "ccc"];

printVarInfo(bool, "let bool = true;");
printVarInfo(name, "let name = \"toan\";");
printVarInfo(score, "let score = 100;");
printVarInfo(boolArr, "let boolArr = [true, true, false];");
printVarInfo(test, "let test = [1, true, \"yes\"];");
printVarInfo(stringArr, "let stringArr = [\"aaa\", \"bbb\", \"ccc\"];");
console.log("Type safety: like we discussed in the a_boolean section, once we initilized a variable with a type, we cant reassign it with a different type")


