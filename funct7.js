//number 7 recursive functions(calculate factorial)
function factorial(k) {
    if (k === 1) {
    return 1;
    } else {
    return k * factorial(k - 1);
    }
    }
    let result = factorial(5);
    console.log(`The factorial of 5 is ${result}`);
    //task countdown
    function countdown(num) {
        if (num >= 0) {
          console.log(num);
          countdown(num - 1);
        }
}