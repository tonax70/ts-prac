function count(n:number, c = 0) {
    if (c > n) return;
    console.log(c);
    count(n, c+1);
}

function countM2(n:number) {
    if (n <= 0) return 0;
    console.log(n);
    countM2(n-1);
}
count(10);
countM2(10);

const arr:number[] = [];
function factorial (x:number):number {
    if (x === 0) {
    arr.push(x);
    return 1;
    }
    const n = x * factorial(x-1);
    arr.push(x);
    return n;
}
factorial(10);
console.log(JSON.stringify(arr));

//resusion print from 1 to 10
function revis (n:number) {
    if (n < 0) return;
    console.log(n);
    return revis(n-1);
}
revis(10);

function doTheJob (cumber:number) {
const arrx:number[] = new Array();

function recus (n:number) {
    if (n < 0) return;
    arrx.push(n);
    recus(n-1);
}

recus(cumber);
return arrx;
}

console.log(doTheJob(800));