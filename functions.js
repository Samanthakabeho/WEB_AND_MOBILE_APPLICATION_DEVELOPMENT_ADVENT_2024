var num =23;

var num_two =2;
var sum = num+num_two;
console.log("sum:",sum);

var num_three = 40;
var num_four =4;
var sum_two = num_three+num_four
console.log("sum_two:",sum_two);

//functions without parameters or arguments
//Void function
function summation(){
    var num_five =40;
    var num_six =4;
    var sum_three = num_five + num_six;
    console.log("sum three:",sum_three);
}
summation();
//Returning function
function summation_two(){
    var num_five =40;
    var num_six =4;
    var sum_three =num_five + num_six;
    return sum_three;
}

// Use it by printing  the value directly on the terminal
console.log("sum four:",summation_two())

// Assigning the value a variable
var sum_four = summation_two();
var sum_five = summation();
console.log(sum_five)

// functions with parameters 
function summation_three(num_five,num_six){
    var sum_six=num_five+num_six;
    console.log("sum_six:",sum_six);
}
summation_three(40,4)
summation_three(100,4)

//Returning functions with parameters
function summation_four(num_five,num_six){

    return num_five + num_six;;
}
// Use it by printing the value directly on the terminal
console.log("sum five:",summation_four(23,5));

// Assigning the value to a variable
var sum_five = summation_four(263,58);