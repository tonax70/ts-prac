import { printVarInfo } from "./_utils";


const bigNumber: bigint = 999999999999999999999999999999999n;
const hugeNumber = BigInt(3457046784047803579804375n);

console.log("BigInt: represent numbers are larger than 2^53 - 1");
console.log(`BigInt nubmer can be created using the "n" suffix`);
console.log("there are 2 mothods to create a big int number is to create a variable : type=bigint or BigInt()");
printVarInfo(bigNumber, "bigNumber");
printVarInfo(hugeNumber, "hugeNumber");