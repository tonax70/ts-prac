import { printVarInfo } from "./_utils";

const unique1: symbol = Symbol('toan');
const unique2: symbol = Symbol('toan');

const compare_2_symbols: boolean = unique1 === unique2;

console.log("Symbol: create unique idenfifier");
console.log("just like human, althrough sharing the same name but different human being, that means \"uniqe\"");
printVarInfo(unique1, "unique1");
printVarInfo(unique2, "unique2");