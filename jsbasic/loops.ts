//loop using to repeat a block of code 
// classic for loop
let buffer : string = "";
let an : number[] = [];
for (let i = 0; i <= 800;i++){
    buffer += i + " ";
    an.push(i);
}
console.log(buffer);
buffer = '';


// for of loop (using for looping the elements within an array or objects child)

const numbers = [1,2,3,4,5,6,7,8,9];
for (let number of numbers ){
    buffer += number + " ";
}
console.log(buffer);

// for in loop (using for looping properties in an object)
type DynamicItem = {
  [key: string]: string | number;
  name: string;
  color: string;
  price: number;
};
const fruit:DynamicItem = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}

//while and do while
// while will check the condition before executing, if the condition is false from start it might not execute at all
// do while will always check the conditions one time before checking the conditions
console.log("while executing: ");
let i = 0;
while (i < 501) {
    console.log(an[i]);
    i++;
}
console.log("do while executing: ");
do {
    console.log(an[i]);
} while (i < 90)