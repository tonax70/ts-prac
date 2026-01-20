import { printVarInfo } from "./_utils";

console.log("INterface is similar to alias but only apply to object types");

interface Manga {
  name:string,
  year: number,
  author:string,
}


const swykksnnsks: Manga = {
  name: "SKS",
  year: 2019,
  author: "rmkr",
  isActive: false
}
printVarInfo(JSON.stringify(swykksnnsks), "swykksnnsks");

interface Manga {
  isActive: boolean,
}

console.log("We can merge 2 interface by write another interface with addition set of properties if needed");