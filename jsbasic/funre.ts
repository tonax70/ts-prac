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

// number constructor ======================================================================================================================
// if we use Number(someNUmber) it will eventually return a primitive datatype number
console.log("typeof Number() : " + typeof Number("800"));

// if we use new Number() it will return a number object - which is non primitive type
console.log("typeof Number() : " + typeof new Number("800"));


// number type casting things
console.log("boolean true and false : " + Number(true) + " and " + Number(false));
console.log("empty string and null and undefined and a string \"a\": " + Number("") + " and " + Number(null) + " and " + Number(undefined) + " and " + Number("a"));
console.log("array [] and [6] and [1,2]: " + Number([]) + " and " + Number([6]) + " and " + Number([1,2]));
console.log("object is always nan: " + Number({}) + " and " + Number({name : "sks"}));

// In conclusion, you'll mostly use the Number() constructor for type conversion more than creating a number or a number object.

// naming conventions =============================================================================================================================

// boolean, use prefix like is, has, can
let isGood : boolean = true;
let hasPermission  : boolean = false;
let canFly : boolean = true;

// function will typically start with a verb
function getUserData () {}

// function that return boolean naming just like boolean value
// send-retrieve data 
function getName() {}
function setName() {}

// event handler function
function handlePhoneNumberChange() {}

// for array use  plural nouns
let students = []; // avoid let student = [] because array represent more than one thing

// the length property nad fixed array ============================================================================================================================
//spare array
const al = (arr:any[])  => console.log("arr length: " + arr.length);
const pa = (arr:any[])  => console.log("arr: " + arr.toString());
const par = (arr:any[])  => console.log("arr raw: " + arr);

const arSp = [1,,,,,,5];
al(arSp);
console.log('access spare elm: ' + arSp[3]);


//create a fixed array length
const newAr = new Array(10);
al(newAr);
pa(newAr);
par(newAr);

//another way to create an array of fixed length
const newAr2 = Array.from({length : 10});
al(newAr2);
pa(newAr2);
par(newAr2);

// create an array and fill it with a number
const filAr = new Array(10).fill(0);
al(filAr);
pa(filAr);