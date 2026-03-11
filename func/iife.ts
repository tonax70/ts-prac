// immediately invoked function expression
// an iife is "defined" from start
// and run immediately right when it's created
// the () and the end is the invoke action
// just like when we define the function function hello () {}
// it doesn't run yet, we ve just created it, only when we run hello() it will put the function into run
// the immediately invoked function expression merged these 2 steps together in one expression
// that's why we got the (function() {})(); syntax
// before commonjs and js modules exist this is the trick to avoid polluting the global environment with variable hoisting
(function(){
    console.log("hello now");
})();

// since it's now basically an expression that invoked immediately, we can do stuff like this
// add sum from 1 to 10 to 10

const wutDa = 10 + (function():number{
    let sum = 0;

    function sumRecursion (n:number) {
        if (n < 0) return;
        sum+=n;
        sumRecursion(n-1);
    }

    sumRecursion(10);
    return sum;

})();

console.log(wutDa);