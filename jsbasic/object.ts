export const manga : {ch1:string, ch2:string, ch3?:string, h4?:string, "string sd"?:string} = {
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


// function method vs object method ======================================================================
// function uses in general purpose of reusing codes
// object methods are bounce to the object, can access the objects via `this` keyword

const sks = {
    name : "SKS",
    age : 800,
    g : "f",
    f : true,
    color : "#FCB001",
    race : 'kitsune',
    // the thing is that an arrow function doesn't own this keyword because it's always global (or based on the context of where called them), only function keyword own this
    extractInfo : function() {
        log(`${this.name} is ${this.age} years old and ${(this.g === "f")? "she" : "he"} has a ${this.color} ${this.f? "fluffy fur" : "fur"} and is a ${this.race}`)
    }
}

// the difference if function and arrow function 
//function belongs to an object and depends in the object context so it can access the porperty of the object itself

log(String(sks.extractInfo()));

// unlike function, arrow function depends on the context of where it is called
// if we put the arrow function in the sks object and then call it outside the object (which we usually do), the arrow function 
// will depends on the current scope context which is the current window and it has no this at this point so that's it
const objectA = {
    popsA : "a",
    methodA : () => String("this is the PopsA property: " + this.popsA)
}

const objectB = {
    popsA : "b",
    methodA : log(objectA.methodA())
}

log(String(objectB.methodA)); // methodA called in global context so it didnt work and return undefined


// object constructor =======================================================================================================
// we can turn primititive values into object as well (but it will create a new object)

let nbr = 1;
let ObjNbr1 = new Object(nbr); // this will create a new object separated from primititive nbr 1

let nbr2 = ObjNbr1;

nbr = 2;

log("the value of nbr 2 will be: " + nbr2); // expect 1 because the ObjNbr1 creates a new object separated from nbr

// until we modify nbr1
ObjNbr1 = Object(2);

log("the value of nbr 2 will be: " + nbr2); // still expect 1 because nbr 2 is still point to the "memoryA" which store nbr 1

nbr2 = ObjNbr1;

log("the value of nbr 2 will be: " + nbr2); // only if we assign it again, it is now reference to the new memory box that point to new ObjNbr1

// JSON parse and stringify ====================================================================================================================
// stringify turn an object into string for better transmission
log("manga object: " + JSON.stringify(manga));

// can conver into string with selected object properies via the second array param
let ch1ch2:string = JSON.stringify(manga, ["ch1", "ch2"]);
log("manga object with selected ch1 and ch2: " + ch1ch2);

//control the spacing of stringified object, formatted multiline json object
log("manga object with spacing 3:\n" + JSON.stringify(manga, null, 3));

// json parse turn the object string into an object again (typically using in receiver) or get data from localstorage
let ObjWithCh1Ch2 = JSON.parse(ch1ch2);
log("ch1 ch2 of manga converted back to object: " + ObjWithCh1Ch2.ch1 + " and " + ObjWithCh1Ch2.ch2);


// optional chaining =====================================================================================================
// access object property without worrying whether they exits or not
log("access ch1 in manga like normal: " + ch1);
//log("this wouldn't possible if a property is not exist, cannot access property of undefined: " + ch1.fluffy.yes); // the program will crash

log("this wouldn't possible if a property is not exist, cannot access property of undefined: " + ch1?.sks?.yes); // this will log undefined instead of an error
// this tells js to only continue if the property is not null or undefined if yes it will return undefined
// useful when we are not sure if a property exist or not

// obj destructing ========================================================================================================================
// extract values from objects in an easier way
// introduced in es6
// assign object property into variables
// this will use {} for destruct an object instead of [] to destruct an array
let {ch1: sen, ch2: nan} = manga;

log("destructed values: " + sen + " and " + "nan");

// if we dont know which properties are there but we want to make sure one property alway exist, use set default value

let {ch1: s1 = "none", ch2: s2 = "none", ch3, h4 = "placeholder"} = manga;

// since char4 doesnt exits it will return placeholder when we are trying to return it
log("h4: " + h4);

// we can destruct a entire object and create a new object

let manganew = {
    ...manga,
    prop : {
        statusx : "the best",
        isLoveCh1 : "hell yeah",
    }
}

// we can destruct the prop object in manganew

let {prop: {statusx}} = manganew;
let way2 = manganew.prop.statusx; // eqiv to this way
log("sks is : " + statusx + " and " + way2);

// create an object shorthand syntax from variables
// for object anime
let cName = "Sen";
let cAge = 800;
let cColor = "#FCB001";
let cFood = "tofu";
let cFav = "cooking";
let cStatus = "the best";

// the syntax will create an object with the property name is the same as the variable name

let best = {cName, cAge, cColor, cFood, cFav, cStatus};
log("new best: " + JSON.stringify(best, ["cName", "cAge"], 1)); // always remember to write the values in the selected properties alway string even if it contains just a single word


// from that we can create an util func
// this will create a new object based on the following input
function createAlime (
    cName = "def name", 
    cAge = 0, 
    cColor = "#FFFFFF", 
    cFood = "rice", 
    cFav = "life", 
    cStatus = "created"
    ) : {
    cName:string,
    cAge:number,
    cColor:string,
    cFood:string,
    cFav:string,
    cStatus:string
} {
return {cName, cAge, cColor, cFood, cFav, cStatus};
}

log("example empty create func with default values: " + JSON.stringify(createAlime(), null, 1));
log("example best character: " + JSON.stringify(createAlime(cName, cAge, cColor, cFood, cFav, cStatus), null, 1));


//===========================================================EXERCISES==============================================================================

const recipes = [];
interface recipt {
name: string;
ingredients: string[];
cookingTime: number;
totalIngredients: number | null;
difficultyLevel:string;
}
const recipe1 : recipt = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 : recipt = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 : recipt = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients:any[]):number {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime:number):string {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// update music list prac
type Album = {
  albumTitle?: string;
  artist?: string;
  tracks?: string[];
};

type RecordCollection = {
  [id: number]: Album;
};
const recordCollection : RecordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// notice that the square braces comes into play here, no dot access
function updateRecords    (records:RecordCollection, id:number, prop: keyof Album, value:string) : typeof recordCollection {
  let result = records as RecordCollection;
  if (+(value) == 0) delete result[id][prop]
  else if (prop !== "tracks" && isNaN(+value)) result[id][prop] = value
  else if (prop === "tracks" && isNaN(+value) && !(prop in records[id])) {
    let arr  = [];
    arr.push(value);
    result[id][prop] = arr;
  } 
  else if (prop === "tracks" && isNaN(+value)) {
    result[id][prop]?.push(value)
  }



  return result;
}

