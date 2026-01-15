import { printVarInfo } from "./_utils";

console.log("ts object is js object with types.");
const manga: {name: string, year:number, authorName:symbol} = {
  name: "SKS",
  year: 2019,
  authorName: Symbol("RMKR")
}
printVarInfo(JSON.stringify(manga), "manga");
console.log("all the type of an atributes within an object can be infered");

console.log("object can have optional property that doesnt always necessary including within the object");
const car: { type: string, mileage?: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;