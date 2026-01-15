export const printVarInfo = (a:any, name:string) => {
  console.log(`type of ${name/*object shorthand*/} is ${typeof a} as ${String(a)/*fixed Cannot convert a Symbol value to a string issue*/}`);
}