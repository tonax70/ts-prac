// string is a primitive data type in javascript but it can be an object if we want to
let str0 = 'sks'; console.log(typeof str0);
let str1 = String(str0); console.log(typeof str1);
// methods doesn't exist in primitive types like string but we can still use it like length, trim, split etc...
// because when we use it, js will temporary wrap the variable into an object String so we can use the methods of the string object like so
console.log(str0.length);
// note that because the primitive types doesn't contains addition methods so it will run faster and more efficient than the string object