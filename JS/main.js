
//& START Problem 1 
/*
var number = Number(window.prompt("Please enter number"));
console.log(number);
*/
//& END Problem 1 

// ^ ===========================================================

//& START Problem 2
/*
var number = Number(window.prompt("Please Enter Number"));
if(number % 3 == 0 && number % 4 == 0){
    console.log("YES")
} else{
    console.log("NO")
}
*/
//& END Problem 2

// ^ =============================================================

//& START Problem 3
/*
var firstNumber = Number(window.prompt("Please enter first number"));
var secondNumber = Number(window.prompt("Please enter second number"));

if(firstNumber > secondNumber){
    console.log(firstNumber);
} 
else if(firstNumber < secondNumber){
    console.log(secondNumber);
}
else if(firstNumber == secondNumber){
    console.log("The two numbers are equal");
}
else{
    console.log("Invalid input");
}
*/
//& END Problem 3

// ^ ==============================================================

//& START Problem 4
/*
var number = window.prompt("Please enter number");
if(number > 0){
    console.log("Output positive");
}
else if(number < 0){
    console.log("Output negative");
}
else if(number == 0){
    console.log("Output equal zero");
}
else{
    console.log("Invalid input")
}
*/
//& END Problem 4

// ^ ==============================================================

//& START Problem 5
/*
var firstNumber = window.prompt("Please enter first number");
var secondNumber = window.prompt("Please enter second number");
var thirdNumber = window.prompt("Please enter third number");

    if((firstNumber > secondNumber) && (firstNumber > thirdNumber)){
        console.log("max element = " ,firstNumber);
        if(secondNumber < thirdNumber){
            console.log("min element = " ,secondNumber);
        }
        else{
            console.log("min element = " ,thirdNumber);
        }
    }
    else if((secondNumber > firstNumber) && (secondNumber > thirdNumber)){
        console.log("max element = " ,secondNumber);
        if(firstNumber < thirdNumber){
            console.log("min element = " ,firstNumber);
        }
        else{
            console.log("min element = " ,thirdNumber);
        }
    }
    else{
        console.log("max element = " ,thirdNumber);
        if(firstNumber < secondNumber){
            console.log("min element = " ,firstNumber);
        }
        else{
            console.log("min element = " ,secondNumber);
        }
    }
*/
//& END Problem 5

// ^ ===============================================================

//& START Problem 6
/*
var number = window.prompt("Enter number ,please");
if(number % 2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}
*/
//& END Problem 6

// ^ ===============================================================

//& START Problem 8
/*
var char = window.prompt("Please enter character");

if((char == 'a' || char == 'A') || (char == 'e' || char == 'E') || (char == 'i' || char == 'I') || (char == 'o' || char == 'O') || (char == 'u' || char == 'U')){
    console.log("vowel");
}
else{
    console.log("Consonant");
}
*/
//& END Problem 8

// ^  ===============================================================

//& START Problem 9
/*
var number = Number(window.prompt("Please enter number"))
var s = "";
for(var i = 1; i <= number; i++){
    s += i + " ";
}
console.log(s);
*/
//& END Problem 9

// ^==================================================================

//& START Problem 10
/*
var number = Number(window.prompt("Please enter number"))
var res;
for(var i=1; i<=12; i++){
    res = number * i;
    console.log(res);
}
*/
//& END Problem 10

// ^ ================================================================

//& START Problem 11
/*
var number = window.prompt("Please enter number")
var str = "";
for(var i=1; i<=number; i++){
    if(i%2==0){
        str += i+ " ";
    }
}
console.log(str);
*/
//& END Problem 11

// ^==================================================================

//& START Problem 12
/*
var baseNumber = Number(window.prompt("Please enter base number"));
var powerNumber = Number(window.prompt("Please enter power number"));

var res = 1;
for(var i=1; i<=powerNumber; i++){
    res *= baseNumber;
}
console.log(res);
*/
//& END Problem 12

// ^ ==============================================================

//& START Problem 12
/*
var totalMarks = 0, subjects;
for(var i=0; i<5; i++){
    subjects = Number(window.prompt("Enter Marks of five subjects:"));
    totalMarks += subjects;
}
var avg = (totalMarks)/5;
console.log("Total Marks = " ,totalMarks);
console.log("Average Marks = " ,avg);

// * assume every subject from 100 so sum of 5 subj = 500
var percentage = (totalMarks)/500 * 100;
console.log("Percentage = " ,percentage);
*/
//& END Problem 12

// ^ ===============================================================

//& START Problem 13
/*
var monthNumber = window.prompt("Please enter Month Number : ");

if(monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12){
    console.log("Days in Month: 31")
}
else if(monthNumber == 2){
    console.log("Days in Month: 28")
}
else if(monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11){
    console.log("Days in Month: 30")
}
else{
    console.log("Invalid input")
}
*/
//& END Problem 13

// ^ ================================================================

//& START Problem 14
/*
var totalMarks = 0, subjects;
for(var i=0; i<5; i++){
    subjects = Number(window.prompt(`Enter Marks of five subjects : 
    Physics, Chemistry, Biology, Mathematics and Computer`));
    totalMarks += subjects;
}

var percentage = (totalMarks) / 500 * 100;

if(percentage >= 90){
    console.log("Grad A");
}
else if(percentage >= 80){
    console.log("Grad B");
}
else if(percentage >= 70){
    console.log("Grad C");
}
else if(percentage >= 60){
    console.log("Grad D");
}
else if(percentage >= 40){
    console.log("Grad E");
}
else{
    console.log("Grad F");
}
*/
//& END Problem 14

// ^ ============================================================

//& START Problem 15
/*
var monthNumber = Number(window.prompt("Enter Month Number: "));

switch(monthNumber){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Days in Month: 31");
        break;
    case 2:
        console.log("Days in Month: 28");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Days in Month: 30");
        break;
    default:
        console.log("Invalid input");
}
*/
//& END Problem 15

// ^ ============================================================


//& START Problem 16
/*
var char = window.prompt("Please enter character");

switch(char){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'o':
    case 'O':
    case "i":
    case 'I':
    case 'u':
    case 'U':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}
*/
//& END Problem 16

// ^ ============================================================


//& START Problem 17
/*
var firstNumber = Number(window.prompt("Please enter first number"));
var secondNumber = Number(window.prompt("Please enter second number"));
*/
/*
var res = 0;
if(firstNumber > secondNumber){
    res = 1;
}
else if(secondNumber > firstNumber){
    res = 2;
}
else if(firstNumber == secondNumber){
    res = 3;
}

switch(res){
    case 1:
        console.log(firstNumber);
        break;
    case 2:
        console.log(secondNumber);
        break;
    case 3:
        console.log("Two numbers is equal");
        break;  
    default:
        console.log("Invalid input");
}
*/
// * another method
/*
switch(true){
    case (firstNumber > secondNumber):
        console.log(firstNumber);
        break;
    case (firstNumber < secondNumber):
        console.log(secondNumber);
        break;
    case (firstNumber == secondNumber):
        console.log(Two numbers is equal);
        break;
    default:
        console.log("Invalid input");
}
*/

//& END Problem 17

// ^ ============================================================


//& START Problem 18
// var number = window.prompt("Please enter number");

/*
var res = false;
if(number % 2 == 0){
    res = true;
}

switch(res){
    case true:
        console.log("Even");
        break;
    default:
        console.log("Odd");
}
*/
// * another method
/*
switch(true){
    case (number % 2 == 0):
        console.log("Even");
        break;
    default:
        console.log("Odd");
}
*/
//& END Problem 18

// ^ ============================================================


//& START Problem 19
// var number = window.prompt("Please enter number");

/*
var res = 0;

if (number > 0){
    res = 1;
}
else if(number < 0){
    res = 2;
}
else if(number == 0){
    res = 3;
}

switch(res){
    case 1:
        console.log("Number is positive");
        break;
    case 2:
        console.log("Number is negative");
        break;
    case 3:
        console.log("Number is zero");
        break;
    default:
        console.log("Invalid input");
}
*/
// * another method
/*
switch(true){
    case (number > 0):
        console.log("Number is positive");
        break;
    case (number < 0):
        console.log("Number is negative");
        break;
    case (number == 0):
        console.log("Number is zero");
        break;
    default:
        console.log("Invalid input");\
}
*/
//& END Problem 19

// ^ ============================================================


//& START Problem 20
/*
var firstNumber = Number(window.prompt("Please Enter First Number"));
var secondNumber = Number(window.prompt("Please Enter Second Number"));
var calculator = window.prompt("Enter Arithmetic Operator : [1: + , 2: - , 3: * , 4: / , 5: %]");

switch(calculator){
    case '+':
    case '1':
        console.log("The sum = " ,firstNumber + secondNumber);
        break;
    case '-':
    case '2':
        console.log("The subtraction = " ,firstNumber - secondNumber);
        break;
    case '*':
    case '3':
        console.log("The multiplication = " ,firstNumber * secondNumber);
        break;
    case '/':
    case '4':
        console.log("The division = " ,firstNumber / secondNumber);
        break;
    case '%':
    case '5':
        console.log("The remainder = " ,firstNumber % secondNumber);
        break;
    default:
        console.log("Invalid input")
}
*/
//& END Problem 20