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

// js closures ======================================================================================================================================
function secret (character:string) {
    let goat = 'fluffy'

    function ilove () {
        console.log("I love " + character + " and " + goat + " tail");
    }
    ilove();
}

// The inner function maintains a reference to its outer lexical environment, preserving access to the variables in that environment even after the outer function has completed.
 secret("sen");

 // we can create a function that works pretty much like a class in java where things can be implement like an object you know what I mean?

 function car (action: string) {
    const brand = "Lexus";
    const model = "LX570";

    function start() {
        console.log(brand + " Brrrrrr brr " + model + " started speed up to 100km/h in just 7.7s");
    }
    function stop() {
        console.log(brand + " stopped. With potent " + model + " ,we are finally go home!" );
    }

    (action === 'start')? start() : stop();
 }

 car("start");

 setTimeout(() => {
    car("stop");
 }, 1000);

 function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

// extra hard pyramid bruh
function pyramid (ch:string, row:number, isFacingDown:boolean) : void {

  if (!isFacingDown) {

      for (let i = row; i > 0;  i--) {

    let aRow = "";
    for (let j = i; j > 0; j--) {

        aRow += " ";

    }

    aRow += ch;

    for (let k = row - i; k > 0; k--) {

        aRow += ch + ch;

    }
    console.log(aRow);
  }
  } else {
      for (let i = 0; i < row;  i++) {

    let aRow = "";
    for (let j = 0; j <= i; j++) {

        aRow += " ";

    }

    aRow += ch;

    for (let k = row - i - 1; k > 0; k--) {

        aRow += ch + ch;

    }
    
    console.log(aRow);
  }
  }

}

pyramid("s", 4, false)

//grade book app
function getAverage (arr:number[]) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
return sum/arr.length
}

function getGrade (g:number) {
if (g === 100) return "A+";
if (g >= 90 && g <= 99) return "A";
if (g >=80 && g <= 89) return "B";
if (g >= 70 && g <= 79) return "C";
if (g >= 60 && g <= 69) return "D";
if (g >=0 && g <= 59) return "F";
}

const hasPassingGrade = (g:number) => getGrade(g) === "F"? false : true;


function studentMsg (arr:number[], s:number) {
  if (hasPassingGrade(s)) return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(s)}. You passed the course.`;
return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(s)}. You failed the course.`;
}

// the OG var keyword ====================================================================================================================================
/*
var is an OG keyword but it comes with many drawback

var is function scoped that means if it's not within any function (in loops,if else or anywhere outside a function) it will become global
and one of the issues is that we can re-init the var without any issues
*/

var variable = 1;

console.log("Original var: " + variable);

var variable = 5; // somehow this still works

console.log("I can re-init the value: " + variable + " which is not supposes to be happened in the cons or let keyword");

// it still exist global even inside the if because ITS FUNCTION SCOPE

if ("sen" === "sen") {
    var sen = "good";
    let senGood = "fluffy";
}

console.log("we can still access the sen variable even if inside the if block: " + sen);

// let and const provides block scoping just like other languages that makes life easier

// hoisting =======================================================================================================================================
// variable hoisting

console.log(xv); // in other language like java we will get an error but instead we get undefined in javascript
var xv = 5;
console.log(xv);
// that means the init part of the variable will hoist to the top and looks something like this
/*
var xv;
console.log(xv); // in other language like java we will get an error but instead we get undefined in javascript
xv = 5;
console.log(xv);
*/

// function hoisting, the function is also hoisted to the top of the scope before they ever executed so we can call the function before declaring it
says("Hello world");

function says (str:string) {
    console.log(str)
}

// for the case of let and const you wont be able to use the value before declaring it, it's still hoisted but in a different way that is uninitialized
// and prevent them from using before init
// there is something called temporal dead zone where in that interval the variable wont available to use