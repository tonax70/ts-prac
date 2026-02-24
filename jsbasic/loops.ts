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

// workshop 1
function getVowelCount(sentence:string):number {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence:string):number {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence:string):number {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence:string):number {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(' ');
  let count = 0;

  for (const word of words) {
    if (word !== '') {
      count++;
    }
  }

  return count;
}

// mutation algorithm

const filterStr = (str:string) => [...new Set(str.toLowerCase().replaceAll(" ","").split(""))].sort().join("");

const mutation = (ar:string[]) => {
  let arCompare = filterStr(ar[0]);
  let arContains = filterStr(ar[1]);
  let c = 0;
  for (let ch of arCompare) {
    if (arContains.includes(ch)) c++;
  }
  return c === arContains.length;
}

// array splitter
function chunkArrayInGroups (ar:number[], num:number) {
  let out = [];
  let prevI = 0;
  for (let i = num; true; i+=num) {
    if (i >= ar.length) {
      out.push(ar.slice(prevI));
      break;
    }
    else {
      out.push(ar.slice(prevI, i));
      prevI = i;
    }
  }
  return out;
}

