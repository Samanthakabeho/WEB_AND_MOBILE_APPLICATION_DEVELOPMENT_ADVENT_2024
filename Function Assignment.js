//Void function
function computation(num1,num2,operation){
    switch (operation){
        case 'add':
        console.log(`The result of the addition is: ${num1+ num2}`);
        break;
        case 'subtract':
        console.log(`The result of the subtraction is: ${num1 - num2}`);
        break;
        case 'multiply':
        console.log(`The result of the multiplication is: ${num1 *num2}`);
        break;
        case'divide':
        if (num2 !=0){
            console.log(`The result of the division is: ${num1 / num2}`);
        }else{
            console.error("cannot divide by zero,");
        }
        break;
        default:
            console.error("Invalid operation. please use 'add', 'subtract','multiply', 'divide'.");
    }
}


// Example 
console.log(computation(12,6,'add'));
console.log(computation(12,6,'subtract'));
console.log(computation(12,6,'multiply'));
console.log(computation(12,6,'divide'));
console.log(computation(12,0,'divide'));