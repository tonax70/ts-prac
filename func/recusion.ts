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