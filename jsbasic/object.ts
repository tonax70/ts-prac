const manga : {ch1:string, ch2:string, ch3?:string, h4?:string, "string sd"?:string} = {
ch1 : "SKS",
ch2 : "NKN",
ch3 : "KEJ",
"string sd" : "test"
}

const log = (s:string):void => console.log(s);

// there are 2 ways to access object data ===================================

// using dot
log("Dot access: " + manga.ch1);

// using square brackets
// more flexible than dot, can assign abject properties as variable
let variable = "string sd";
log("Square brackets access: " + manga[variable]);


// delete properties from an object =========================================
delete manga[variable];
log("Object after deleting: " + JSON.stringify(manga));
log("Square brackets access string sd: " + manga[variable]);//but notice that the property inside the brackets should be string

// using rest param to access other half
const  {ch1, ch2, ...sideChar} = manga;
log("Rest param extraction: " + JSON.stringify(sideChar));


// check if a property is available within an object =========================
// method 1 use hasOwnProperty()
log("manga has ch1? " + !!manga.hasOwnProperty("ch1"));

//method 2 use in keyword
log("Manga has string sd? " + !!(variable in manga));

// nested object properties =====================================
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log("Nestes phone dot access: " + person.contact.phone.work); // "098-765-4321"
console.log("Nested phone brackests access: " + person['contact']['phone']['work']); // "098-765-4321"


// primitive data types and non-primitive data type
let num : number = 800;
let str : string = "SKS";
let bl : boolean = true;
let nu : null = null;
let un : undefined = undefined;

log(`
Primitive data types are the simplest form of data in JavaScript.
They include numbers, strings, booleans, null, undefined, and symbols.
These types are called "primitive" because they represent single values and are not objects.

When you work with primitive data types, you're dealing directly with their values.
For example, when you create a variable with a primitive value, that value is stored directly in the variable.

Primitive values are immutable,
which means once they are created,
their value cannot be changed.
However, you can reassign a new value to the variable.
    `);

//  non-primitive data types
// including object, arrays nd function
// Unlike primitives, non-primitive types can hold multiple values as properties or elements.
// In JavaScript, when you assign an object to another variable, you're copying the reference to the object, not the object itself.
// This is known as shallow copying by reference.
// As a result, any changes made to the object through one reference are reflected in all references to that object.

// for example in primititives data type, you assign a to b
let a = true;
let b = a;
log("b assigned to be equal to a");
// of course b will be true
log("b result : " + b);
// if we change a
a = !a;
log("a result updated: " + a);
// a result is now false
// but let's see b

log ("b result : " + b);
//that means primititive values are immutable until you assign it

// but let's see it's not the case with the non-primititive value
// let's assign manga to newmanga array

let newmanga = manga;
log("new manga = nanga = " + JSON.stringify(newmanga));

// but when whe add properties to manga
manga.ch3 = "SRO";
log("manga updated : " + JSON.stringify(manga));
// the manga is updated
// now let's see the new manga
log("new nanga: " + JSON.stringify(newmanga));
// unlike primititive data types, non-primititive datatype will only store the reference to itself
// when we assign nanga to newmanga , the newmanga object will only store the reference to the manga object it didnt create a new object
// but the concat bethod will create a new "reference" to the object, just noticed

