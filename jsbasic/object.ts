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
log("Square brackets access string sd: " + manga[variable]);

// using rest param to access other half
const  {ch1, ch2, ...sideChar} = manga;
log("Rest param extraction: " + JSON.stringify(sideChar));

