//An if statement is used to execute a block of code
// If statements allow the program to make decisions based on certain conditions
let temperature = 30;
if (temperature >25){
    console.log("It's hot!");
}else{
    console.log("It's cold!");
}

//To modify the program to print a message for temperatures between 15 and 25 degrees
// I can use an else if statement which allows to add additional condition to check for the temperatures
// For example
let Temperature = 30;
if (temperature >25){
    console.log("It's hot!");
}else if(temperature >= 15 && temperature <=25){
    console.log("It's warm.");
}else{
    console.log("It's cold!");
}
