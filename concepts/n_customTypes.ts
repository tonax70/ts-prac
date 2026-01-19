import { printVarInfo } from "./_utils";

console.log("we can use union (|) and intersection (&) to create custon types from other types");
type Alime = { name: string, age: number, authorName: string };
type Human = { name: string, age: number, family: string };

type Fantasy = Human & Alime;
const testFantasy: Fantasy = {
  name: "SKS",
  age: 800,
  authorName: "rmkr",
  family: "ksn"
}

console.log(`if we have an
  alime type with(name:string, age:number, authorname:string)
  and
  human type with(name:string, age:number, family:string)
  then
  the result of Human & Alime is 
  (name:string, age:number, family:string, authorName:string)
  `)

printVarInfo(testFantasy, "testFantasy");
