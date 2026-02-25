// string is a primitive data type in javascript but it can be an object if we want to
let str0 = 'sks'; console.log(typeof str0);
let str1 = String(str0); console.log(typeof str1);
// methods doesn't exist in primitive types like string but we can still use it like length, trim, split etc...
// because when we use it, js will temporary wrap the variable into an object String so we can use the methods of the string object like so
console.log(str0.length);
// note that because the primitive types doesn't contains addition methods so it will run faster and more efficient than the string object

// toString method ===============================================================================
let sks_age = 800;

// convert a value to it's string representation, in different base from 2 to 36
//binary
console.log("binary: " + sks_age.toString(2));
//decimal
console.log("dec: " + sks_age.toString(10));
//octal
console.log("octal: " + sks_age.toString(8));
//hexadecimal
console.log("hex: " + sks_age.toString(16));
// base 36
console.log("binary: " + sks_age.toString(36));
//array tostring
console.log("array tostring: " + [1,2,3].toString());


