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