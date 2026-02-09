

const chrt : string[] = ["SKS", "NKN", "SHR", "KEJ", "SRA"];

//accessing
console.log(chrt[0]);

// property: length
console.log(chrt.length);


// updating element
chrt[1] = "KRT";
console.log(chrt);


// 2dimensional array

const chessboard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];
const chesraw =  () => {
    let str = "";
    for (let i = 0; i < chessboard.length; i++) {
        str += JSON.stringify(chessboard[i]) + '\n';
    }
    return str;
}
console.log(chesraw());


// destructing
const [s, n, sh, k, sr] = chrt;
console.log(`character: ${s} - ${n} - ${sh} - ${k} - ${sr}`);

//spread syntax
const [s2, n2, ...restChar] = chrt;
console.log(`char" ${s2} - ${n2} - ${JSON.stringify(restChar)}`);

//common method

// push return new arr len
let phs:any = chrt.push('yes');
console.log("Push new len: " + phs);
console.log(JSON.stringify(chrt));


//pop return the removed element - if empty return undefined
phs = chrt.pop();
console.log("Pop item: " + phs);
console.log(JSON.stringify(chrt));

//unshift - add new element to the start,return new len
phs = chrt.unshift('yes');
console.log("Unshift new len: " + phs);
console.log(JSON.stringify(chrt));


//shift remove first elm and return new len  - if empty then undefined
phs = chrt.shift();
console.log("Shift new len: " + phs);
console.log(JSON.stringify(chrt)); 

// indexof return the index of the targeted element, if not found, return -1
console.log(`Index of SKS: ${chrt.indexOf("SKS")}`);
console.log(`Index of Tonax: ${chrt.indexOf("Tonax")}`);

// concat creating a new array by merging 2 or more array
let secarr = ["Tonax"];
let secarrE:any[] = [];
let newMergeAr = chrt.concat(secarr);
console.log("new array concatenated: " + JSON.stringify(newMergeAr));
// notice that with concat always create a enw array and the array wont be equal to the old one
console.log(secarr === secarr);
let secarrEE = secarrE.concat(secarr);
console.log("Secarr: " + JSON.stringify(secarr));
console.log("SecarrEE: "+JSON.stringify(secarrEE));
if (secarr != secarrEE) console.log("Secarr and SecarrEE is not equal because concat created new Array");

const lg = () => console.log(JSON.stringify(chrt));
//splice : add or remove element from any position within the array - WARNING: this will mutate the original array
console.log("from index 0, dont delete anything, insert 2 elements 'i' and 'love'");
chrt.splice(0, 0, "i", "love");
lg();
console.log("from index 3, dont delete anything, insert 2 elements '| other' and 'characters'");
chrt.splice(3, 0, "| other", "characters");
lg();
console.log("delete 6 elements from index 3");
chrt.splice(3, 6);
lg();


//include return true if an element exist within the arr and false if not
console.log(chrt.includes("SKS"));

//slice creates a shallow copy of an array specified by the start and the end of the array, it wont mutate the original array
console.log(chrt.slice(1,3)); // will be >= start index and < end index + 1

let str = "Tonax";
//split method creates an array of characters from a string based on input regex
let charstr: string[] = str.split("");
console.log(charstr);

// reverse method reversing an array
let arrR = charstr.reverse();

//join method join all array element with defined char
console.log(arrR.join("-"));


