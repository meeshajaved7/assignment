// ========CHAPTER#01========

//    1. Write a script to greet your website visitor using JS alert box.

alert("Welcome to our page!")

// 2. Write a script to display following message on your web page:
alert("Enter! Please enter a valid password")

// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS land...\nHappy Coding!")

// 4. Write a script to display following messages in sequence:
alert("Welcome to Js land... ")
alert("Happy Coding!")

// 5. Generate the following message through browser’s developer console:
alert("Hello...I can run Js through my web browser's console")

// / CHAPTER#01 end





// CHAPTER#02 start

// 1. Declare a variable called username.
var username = prompt("enter username");
alert(username);
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Rameesha Javed";
alert(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = "hello world";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name = "john doe";
alert(name)
var name = "15 years old"
alert(name)
var name = "certified mobile application development"
alert(name)
// 5. Write a script to display the following alert using one JS variable:
var str = "pizza";
alert("pizza \n pizz \n piz \n pi \n p")


// //  6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow 
// mentioned message in an alert box.(Hint: use string concatenation)

var email;
email = "rameeshajaved7@gmail.com"
alert("my email addresss is" + "  " + email)

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to Learn from the book" + " " + book);


// 8. Write a script to display this in browser through JS

var str = "Yah! I can write HTML content through JAVASCRIPT"
document.write(str + "<br/>" + "<br/>" + "<br/>");

// 9. Store following string in a variable and show in alert and browser through JS
var border = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(border);
// ~~~~~~~~CHAPTER 2 END~~~~~~~~



// ~~~~~~~~CHAPTER 3 sTART~~~~~~~~


// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age;
age = "21";
alert("i am" + " " + age + " " + "years old.");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

function clickCounter() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    alert("You have visited the website " + localStorage.clickcount + " time(s).");
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}


// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:  

var birthYear;
birthYear = "1998";
document.write(" My birth year is" + " " + birthYear + "<br/>");
document.write("Data type of my declared variable is number" + "<br/>" + "<br/>" + "<br/>")



// 4. A visitor visits an online clothing store www.xyzClothing.com . 
// Write a script to store in variables the following information:
//  a. Visitor’s name b. Product title c. Quantity i.e. 
//  how many products a visitor wants to order
//  Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var name = "John Doe ";
var Product = "T-shirt";

function order() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount);
    } else {
      localStorage.clickcount = 1;
    }
    document.write("John Doe ordered " + localStorage.clickcount + " T-shirts on XYZ Clothing store");
  } else {
    document.write("Sorry, your browser does not support web storage...");
  }
}

document.write("" + " <br/>" + "");
//  --Chapter:3 END --

//  =============chapter 4 start=================

// 1. Declare 3 variables in one statement.

// var a,b,c;

// 2. Declare 5 legal & 5 illegal variable names.

// legal:-  
// var a="hello world";
// var b=hello;
// var c=myName;
// var d=5;
// var e=2+2;

// illegal:- 
// var a=?heloo;
// var b=)menu;
//~~~~~~~ chapter:4 end~~~~~~~~~



//~~~~~~~ chapter:5 start~~~~~~~~~
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a = 5;
var b = 3;
var c = a + b;
document.write("Sum of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>" + "<br/>" + "<br/>" + "<br/>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// subtraction
var a = 5;
var b = 3;
var c = a - b;
document.write("Subtraction of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

// multiplication

var a = 5;
var b = 3;
var c = a * b;
document.write("Multiplication of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

// division
var a = 5;
var b = 3;
var c = a / b;
document.write("Division of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");


// modulus.

var a = 5;
var b = 3;
var c = a % b;
document.write("Modulus of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>" + "<br/>" + "<br/>" + "<br/>");

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
var t;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is:" + t + "<br/>");

//  c. Initialize the variable with some number. 

var t = 5;
//  d. Show the value of variable in your browser like “Initial value: 5”. 
document.write("Value after variable declaration is:" + t + "<br/>");

//  e. Increment the variable. 
var t;
t++;
//  f. Show the value of variable in your browser like “Value after increment is: 6”. 
document.write("Value after increment is:" + t + "<br/>");
//  g. Add 7 to the variable.
var r;
r = t + 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("Value after addition is:" + r + "<br/>");

//  i. Decrement the variable.
var s;
s = --r;


//j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is:" + s + "<br/>");

//k. Show the remainder after dividing the variable’s value by 3.

var u;
u = s % 3;

// l. Output : “The remainder is : 0”.
document.write("The remainder is:" + u + "<br/>" + "<br/>" + "<br/>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to
//  store ticket price in a variable & calculate the cost of
//   buying 5 tickets to a movie. Example output:

var ticketprice = 600;
var cost = ticketprice * 5;
document.write("Total cost of buying 5 tickets to a movie is:" + cost + "PKR" + "<br/>" + "<br/>" + "<br/>" + "<br/>");

// 5. Write a script to display multiplication table of any number in your browser. E.g

var a;
document.write("Table of 4" + "<br/>");
for (a = 1; a <= 10; a++) {
  document.write("4" + "x" + a + "=" + 4 * a + "<br/>");
}
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var temperature = 25;
//  °C
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write("<br/>" + "<br/>" + "<br/>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
//  Store the following in variables 
//  a.Price of item 1
var item1 = 650;
//  b. Price of item 2 
var item2 = 100;
//  c. Ordered quantity of item 1 
var quantity = 3;
//  d. Ordered Quantity of item 2 
var quantity2 = 7;
//  e. Shipping charges
var charges = 100;
//  Compute the total cost & show the receipt in your browser.
document.write("total cost of your order is: " + "  " + (+(item1 * quantity) + (+item2 * quantity2) + charges) + "<br/>" + "<br/>" + "<br/>");

// 8. Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser

var marks = 980;
var obtained = 804;
document.write(" Total Marks :" + marks + "<br/>" + "Marks Obtained :" + obtained + "<br/>" + "Percentage:" + (+obtained / marks * 100) + "%" + "<br/>" + "<br/>" + "<br/>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals.
//  Write a script to convert the total currency to Pakistani Rupees. 
//  Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


var dollars = 10;
var riyals = 25;
document.write("Rotal Currency in PKR is:" + (+dollars * 104.80 + riyals * 28) + "<br/>" + "<br/>" + "<br/>" + "<br/>")

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
var a = 10;
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression
document.write((+a + 5) + (a * 10) + (a / 2) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
var year = 2020;
// b. Store their birth year in a variable. 
var birth = 1998
// c. Calculate their 2 possible ages based on the stored values.
document.write("Current year:" + year + "<br/>" + "Birth year:" + birth + "<br/>" + "Age:" + (+year - birth) + "<br/>" + "<br/>" + "<br/>" + "<br/>")
// Output them to the screen like so: “They are either NN or NN years old”.



// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. 
// (Hint : Area of a circle = π r2, π = 3.142)
var r = 20, circumference, area;
document.write("Radius of Circle:" + r + "<br/>" + "The Circumference is:" + (+(2 * 3.142 * r)) + "<br/>" + "The Area is:" + (+(3.142 * r * r)) + "<br/>")


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” 
// of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable
var snack = "french fries";
// b. Store your current age into a variable. 
var age = "21";
// c. Store a maximum age into a variable. 
var age2 = "80"
// d. Store an estimated amount per day (as a number). 
var amount = 1000;
// e. Calculate how many would you eat total for the rest of your life.
document.write("You will need" + " " + age + "0" + " " + snack + " " + "to last you until the ripe old age of" + "  " + age2 + "<br/>" + "<br/>" + "<br/>" + "<br/>");
// ~~~~~~~~CHAPTER 5 END~~~~~~~~


// ~~~~~~~~CHAPTER 6 START~~~~~~~~


// 1. Write a program to take a number in a variable, 
// do the required arithmetic to display the following result in your browser:
var a = +prompt("enter value for a is:")
document.write("The Value of" + a + "is:" + "<br/>");
document.write("......................." + "<br/>");
document.write("The Value of a++ is:" + ++a + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");

document.write("The Value of a++ is:" + a++ + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");
document.write("The Value of a++ is:" + --a + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");
document.write("The Value of a++ is:" + a-- + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");


// 2. What will be the output in variables a, b & result after execution of the following script:
//  var a = 2, b = 1; var result = --a - --b + ++b + b--;
//  Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
var a = 2, b = 1;
document.write("result:" + (+ --a - --b + ++b + b--) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

// 3. Write a program that takes input a name from user & greet the user.
var username = prompt("enter your name:")
document.write("Hey" + " " + username + "!" + " " + "Thanks for visiting here" + "<br/>" + "<br/>" + "<br/>" + "<br/>")

// // 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
// //  If user does not enter a new number, multiplication table of 5 should be displayed by default.
var number = +prompt("enter table of your choice:");

if (number > 0) {
  document.write("Table of " + " " + number + "<br/>");

  for (x = 1; x <= 10; x++) {
    document.write(number + "x" + x + "=" + number * x + "<br/>");
  }
}
else if (console !== 'undefined') {
  document.write("Table of 5" + "<br/>");
  for (a = 1; a <= 10; a++) {
    document.write("5" + "x" + a + "=" + 5 * a + "<br/>");
  }
}
document.write("<br/>" + "<br/>" + "<br/>" + "<br/>")

// // 6. Take
// // a) Take three subjects name from user and store them in 3 different variables.
var subject1 = prompt("enter your subject name");
document.write(subject1);

var subject2 = prompt("enter your subject name");
var subject3 = prompt("enter your subject name");

// // b) Total marks for each subject is 100, store it in another variable.
var total_marks = 100;
// // c) Take obtained marks for first subject from user and stored it in different variable.
var marks1 = +prompt("enter your obtained marks");

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.

var marks2 = +prompt("enter your obtained name");
var marks3 = +prompt("enter your obtained name");
// document.write(<b>Subjects</b> + <b>Total Marks</b>  )
document.write("<br/>" + "<br/>" + "<br/>" + "<br/>")

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


// ~~~~~~~~~~CHAPTERS 6-9 END ~~~~~~~~~~~

// ~~~~~~~~~~CHAPTERS 9-11=============~
//Task1.
var city=prompt("Enter City");
if(city=="Karachi"){
    alert("Welcome to city of lights");
}  

//Task2.

var gender=prompt("Enter your gender");
if(gender=="Male"){
    alert("Good Morning Sir");
}
else if(gender=="Female"){
    alert("Good Morning Ma'am");
}

//Task3.

var color=prompt("Input signal color");
if(color=="Red"){
    alert("Must Stop");
}
else if(color=="Yellow"){
    alert("Ready to move");
}
else if(color=="Green"){
    alert("Move Now");
}

//Task4.

var a=prompt("Input Remaining fuel");
if(a<0.25){
    alert("Please refill the fuel in your car");
}

//Task5.
// a.
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }                    //Output:given condition for variable a is true
// b.
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }                  //No Output
//c.
var c = 12; if (c++ === 13){ alert("condition 1 is true"); }                                       //Output:condition 2 is true
if (c === 13){                                                                                     //Output:condition 4 is true
    alert("condition 2 is true"); } 
if (++c < 14){ 
    alert("condition 3 is true"); } 
    if(c === 14){
     alert("condition 4 is true"); }  

//d.
var materialCost = 20000;                                                                       //Output: The cost equals
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){
     alert("The cost equals"); } 

//e.
if (true){                                                                                    //Output:True
    alert("True"); } 
    if (false){ alert("False"); } 

//f.
if("car" < "cat"){                                                                           //Output:car is smaller than cat
    alert("car is smaller than cat"); } 


// 6. Write a program to take input the marks obtained in three subjects & total marks. 
// // Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// // Show the total marks, marks obtained, percentage, grade & remarks like:
// var marksE=+prompt("Enter Obtained marks of English");
// var marksU=+prompt("Enter Obtained marks of Urdu");
// var marksM=+prompt("Enter Obtained marks of Maths");
// var totalmarks=300;
// document.write( "Total Marks:"+" " +totalmarks+"<br/>");

// document.write( "Marks Obtained :"+" " + (+marksE+marksU+marksM)+"<br/>");
// document.write( "Percentage :"+" " + (+marksE+marksU+marksM/totalmarks*100)+"%"+"<br/>");




// document.write("<br/>" + "<br/>" + "<br/>" + "<br/>")



//Task7.

var secNum=4;
var n=prompt("Guess the number");
if(n==4){
    alert("Bingo! Correct answer");
}
else if(n+1){
    alert("Close enough to the correct answer");
}

//Task8.

var a=prompt("Enter num to check divisible of 3's");
if(a%3==0){
    alert("Yes it is divisible by 3");
}
else{
    alert("No it is not divisible by 3")
}

//Task9.

var a=prompt("Enter num to check even or odd");
if(a%2==0){
    alert("Even number");
}
else if(a%2!==0){
    alert("Odd number");
}

//Task10.

var t=prompt("Enter temperature");
if(t>40){
    alert("It is too hot outside");
}
else if(t>30){
 alert("The Weather today is Normal");
}
else if(t>20){
alert("Today’s Weather is cool.");
}
else if(t>10){
alert("OMG! Today’s weather is so Cool");
}

                   // Chapter12-13

//Task1.

var ch;
ch=prompt("Enter any word or number");
if (ch>='A' && ch<='Z')
alert("Character is a capital letter");
else if (ch>='a' && ch<='z')
alert("Character is a small letter");
else
alert("It is a digit");

//Task2.

var a,b;
a=prompt("Input first integer");
b=prompt("Input second integer");
if(a>b)
document.write(a + "is greater integer");
else if(b>a)
document.write(b + "is greater integer");
else if(b===a)
document.write(b + "is equal to" +a);

//Task3.

var x=prompt("Enter a number to check positive negative or zero");
if(x>0){
    alert("Number is positive");
}
else if(x<0){
    alert("Number is negative");
}
else if(x==0){
    alert("Number is zero");
}

//Task4.

function isVowel(x){

	var text;
	var x = x.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (x != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
// See if "A" is a vowel
var char ;
char=prompt("Enter any alphabet to check vowel or not");

if (isVowel(char)) {
	console.log("True");
} else {
	console.log("False");
}
  
//Task6.

var hour = 13; 
if (hour < 18){ 
    alert("Good day");
} 
    else {
        alert(" Good evening");
    }  
//Task7.

var time=prompt("Enter Prompt");
if(time>=0000 && time<1200){
    alert("Good Morning");
}
    else if(time>=1200 && time<1700){
        alert("Good Afternoon");
    }
    else if(time>=1700 && time<2100){
        alert("Good Evening");
    }
    else if(time>=2100 && time<2359){
        alert("Good night");
    }

//    =============Chapter14-16===========
// //Task1.

// student_names= []; 

// //Task2.

// student_names= [];

// //Task3.

// var fruits =["apple", "orange", "grapes","mango"];

// //Task4.

// var num =[11,22,33,44,55];

// //Task5.

// var boolean =[true,false];

// //Task6.

// var mixArr =[true, 11, "mango", false, 55, "Ali"];

// //Task7.

// document.write("Qualifications");
// var Pakistan=[SSC , HSC ,BCS , BS , BCOM , MS , MPhil , PhD];
// for(Pakistan=[0]; ; Pakistan++){
// document.write(Pakistan[0]);
// }

//Task9.

var color=["red", "pink", "blue"];
document.write(color );
var a=prompt("Add color from start");
color.unshift(a);
document.write(color);
var b=prompt("Add color from end");
color.push(b);
document.write(color);
var c=prompt("Delete color from start");
color.shift(c);
document.write(color);
var d=prompt("Delete color from end");
color.pop(d);
document.write(color);
var e=prompt("Insert to an any index position");
color.splice(2,0,e);
document.write(color);
var f=prompt("Insert to an any index position");
color.slice(2,0,f);
document.write(color+ "<br>"+ "<br>");

//Task10.

var std_score=[320,230,480,120];
document.write("Score of Students : " + std_score + "<br>");
std_score.sort(function(a, b){return a-b});
document.write("Ordered Score of Students : " + std_score+ "<br>"+ "<br>");

//Task11.

var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("CitiesList:"+ "<br>" + cities + "<br>");
var selectedCitiesArray= cities.slice(1,4);
document.write("Selected Cities List:" + "<br>" + selectedCitiesArray+ "<br>"+ "<br>");


//Task12.

var arr = ["This",  "is", "my" , "cat"]; 
document.write("Array <br>" + arr + "<br>"+ "<br>");
document.write("String <br>" + arr.join(' ')+ "<br>"+ "<br>");

//Task13.

var arr=["keyboard", "Mouse", "Printer", "Monitor"];
alert(arr);
arr.shift();
alert(arr);
arr.shift();
alert(arr);
arr.shift();
alert(arr);

//Task14.

var arr=["keyboard", "Mouse", "Printer", "Monitor"];
alert(arr);
arr.pop();
alert(arr);
arr.pop();
alert(arr);
arr.pop();
alert(arr);

//Task15.
function favBrowser() {
    var mylist=document.getElementById('myList');
    document.getElementById('mobile').value=mylist.value;
}

                        //Chapter17-20
//Task1.

//var arr=[],[],[];


//3. Write a program to print numeric counting from 1 to 10.
var i;
document.write("PRINT NUMERIC COUNTING" + "<br/>")
for (i = 1; i <= 10; i++) {
  document.write(i + "<br/>")
}
document.write("<br/>" + "<br/>" + "<br/>" + "<br/>")

// 4. Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user.
var number = +prompt("enter table of your choice:");
var length = +prompt("enter length of your choice:");


document.write("Table of " + " " + number + "<br/>");

for (x = 1; x <= length; x++) {
  document.write(number + "x" + x + "=" + number * x + "<br/>");
}

document.write("<br/>" + "<br/>" + "<br/>" + "<br/>")

//Task5.

var fruits = new Array("Apple", "Banana", "Mango", "Orange", "Strawberry");

var len = fruits.length;	//no. of elements of the array

//print elements of the array
for (var i = 0; i < len; i++) {
	document.write(fruits[i]);
}





document.write("<br/>" + "<br/>" + "<br/>" + "<br/>")

//6. Generate the following series in your browser. See example output. 
//  a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
var i;
document.write(" COUNTING" + "<br/>")
for (i = 1; i <= 15; i++) {
  document.write(i + ",")
}
document.write("<br/>" + "<br/>")

//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
var i;
document.write(" REVERSE COUNTING" + "<br/>")
for (i = 10; i >= 1; i--) {
  document.write(i + ",")
}
document.write("<br/>" + "<br/>")

//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
var i;
document.write(" EVEN COUNTING" + "<br/>")
for (i = 1; i <= 10; i++) {
  document.write(+(i * 2) + ",")
}
document.write("<br/>" + "<br/>")

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
var i;
document.write(" ODD COUNTING" + "<br/>")
for (i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    document.write(i + ",")
  }
}
document.write("<br/>" + "<br/>")

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var i;
document.write(" SERIES" + "<br/>")
for (i = 1; i <= 10; i++) {
  document.write(+(i * 2) + "k" + ",")
}
document.write("<br/>" + "<br/>" + "<br/>" + "<br/>")


// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the list or not. 
var items=["cake","apple pie","cookie","chips","patties"];

var j=prompt( 'Welcome to ABC bakery.What do you want to ordeer sir/maam?'  )

if( j != 0){
  var a =items.indexOf(j);

    document.write( j + " "+ "is availbale at index"+" " +a)
}
else{
  document.write("We are sorry." + "  "+j+ "isn't availble in our bakery"+ "<br>"+ "<br>" )

}





//Task8.

var array = [24, 53, 78, 91, 12];
var largest= 0;
document.write("Array is " + array + "<br>");

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.write("Largest num in array is : " + largest+ "<br>"+ "<br>");






//Task9.

var arr = [24, 53, 78, 91, 12];
document.write("Array is " + arr + "<br>"+ "<br>"+ "<br>");
var min = Math.min.apply(Math, arr);
document.write("Smallest num in array is "+ min+ "<br>"+ "<br>");





//10. Write a program to print multiples of 5 ranging 1 to 100.
var i;
document.write(" MULTIPLES OF 5" + "<br/>")
for (i = 1; i <= 20; i++) {
  document.write(+(i * 5) + ",")
}
document.write("<br/>" + "<br/>")

//                 // CHAPTER 21-25
// // 1. Write a program that takes two user inputs for first and last name using prompt 
// //  merge them in a new variable titled fullName. Greet the user using his full name.
//  var firstName=prompt("enter your first name");
//  var lastName=prompt("enter your last name");
//  var Name=firstName+lastName;
//  alert( "Hey!" +  " "+ Name + " " + "Welcome here")

// //  2. Write a program to take a user input about his favorite mobile phone model. 
// // Find and display the length of user input in your browser
// var mobName=prompt("enter your Favourite mobile  name");
// var mobile=mobName.length;
// document.write("My favourite Phone is:"+ " "+ mobName+"<br/>")
// document.write( "Length of string:"+" "+  mobile)
// //  3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .



// 9.to covert a string into number
// var str="472";
// var string=str.toString();

// document.write("Value:"+ " "+string +"<br/>"+"Type:"+" "+"String" +"<br/>")

// var string=parseInt(str);

// document.write("Value:"+ " "+string +"<br/>"+"Type:"+" "+"Number"+"<br/>")

//6. seconds tha elapsed between refrence date
// var year=new Date();
// var millisec=year.getTime();
// var mint=new Date();
// var minutes=Mathrandom(mint);
// document.write("Current Date:"+" "+year+"<br/>");
// document.write("Ellasped milliseconds since January 1,1970:"+" "+millisec+"<br/>");
// document.write("Ellasped minutes since January 1,1970:"+" "+ minutes+"<br/>");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var year2=new Date("Sat dec 5 2015 22:50:16 GMT+0500(PKT)")
var date=year2.getTime();

// var diff =year2-date2;
 var diff2=date/(1000*60);
//  var output=diff2;
 document.write(diff2+"<br/>");
 


//========Chapter38-42=======

//Task1

// var a =+prompt("enter the value of a ");
// var b=+prompt("enter the value of b");

// var value=power(a,b);
// alert("raised value  ="+a+ "^"+b+" is "+value);
// function power(a,b)
// {
// var i,value;
// value=a;
// for(i=1;i<b;i++)
// {
// value=value*a;
// }
// return value;
// }

//Task2

// var year=+prompt("Enter an year : ");
// var leap=find(year);
// 	if(leap==1)
// 		alert(year+" is leap year ");
// 	else
// 		alert(year+" is not a leap year ");

// function find(a)
// {
// 	var i=0;
// 	if((a % 4 && a % 100 && a % 400)==0)
// 		i=1;
// 	else
// 		i=0;
// 	return i;
// }


//Task3
// var a =+prompt("Enter first sideof traingle");  
// var b =+prompt("Enter second sideof traingle");  
// var c =+prompt("Enter third sideof traingle");  

// alert("Area is "+findArea(a, b, c))   

// function findArea(a, b, c)  
// {  
     
//     if (a < 0 || b < 0 || c < 0 ||  
//        (a + b <= c) || a + c <= b ||  
//                        b + c <= a)  
//     {  
//         alert("Not a valid trianglen") ;  
//         exit(0);  
//     }  
//     var s = (a + b + c) / 2;  
//     return Math.sqrt(s * (s - a) *  
//                     (s - b) * (s - c));  
// }  
 
//Task4
// var a=+prompt("Enter marks of first subject");
// var b=+prompt("Enter marks of second subject");
// var c=+prompt("Enter marks of third subject");
// avg(a,b,c);
// perc();
// alert("average is"+av+" percentage is "+per);
// function avg(){
//      av=(a+b+c)/3;
// }
// function perc(){
//     per=(av/(a+b+c))*100;
// }


//Task8
// var a =+prompt ("Enter the distance (in km):");
// function meter(){
//     b = a * 1000;
//     document.write("Distance in meters = "+b+"m"+"<br>");
// }
// function feet(){
//     c = a * 3280.84 ;
//     document.write("Distance in feet = "+c+"ft"+"<br>");
// }
// function inche(){
//     d = a * 39370.08;
//     document.write("Distance in inches = "+d+"in"+"<br>");
// }
// function cent(){
//     f = a * 1000 * 100;
//     document.write("Distance in centimeters = "+f+"cm"+"<br>");
// }
// meter();
// feet();
// inche();
// cent();

//Task9
// var i, over_time, overtime_pay = 0;
// var n=+prompt("How many employess you want to calculate overtime pay");
// 	for (i = 1; i <= n; i++)
// 	{
//         var time_worked=+prompt("Enter the time employee worked in hr ");
        
// 		if (time_worked>40)
// 		{
// 			over_time = time_worked - 40;
// 			overtime_pay = overtime_pay + (12 * over_time);
// 		}
// 	}
// document.write("Total Overtime Pay Of Employees Is "+ overtime_pay);

//========Chapter43-48=======

//Task2
// function popup(message) { 
//        alert(message); 
// }



//========Chapter49-52=======

//Task1
// function tosubmit() {
//     // Getting the value of your text input
//     var mytext = document.getElementById("mytext").value;

//     // Storing the value above into localStorage
//     localStorage.setItem("mytext", mytext);

//     return true;
// }
// function init() {
//     // Retrieving the text input's value which was stored into localStorage
//     var mytext = localStorage.getItem("mytext");

//     // Writing the value in the document
//     document.write("passed value = "+mytext);
// }

//Task2
// function para() { 
//       var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut praesentium vel dicta explicabo voluptatum tenetur, maxime saepe, qui magni minus culpa eaque ad rem repellendus facere amet blanditiis porro aperiam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut praesentium vel dicta explicabo voluptatum tenetur, maxime saepe, qui magni minus culpa eaque ad rem repellendus facere amet blanditiis porro aperiam?"
//        document.getElementById("para").innerHTML = paragraph; 
// }


        //=========Chapter 53-58========

//Task1
// function img() {
//         var images = ["image/1.jpg", "image/2.jpg", "image/3.jpg", "image/4.png"];
    
//         for (var i = 0; i < images.length; i++) {
//             document.getElementById("modal-img").innerHTML = images[i].src;
//         }
//         var modal = document.getElementById('modal');

// modal.classList.add('modal-open')
// modal.classList.remove('modal-close');
// }
    
// img();
// function onClosedImagModal(){
//         var modal = document.getElementById('modal');
//         modal.classList.add('modal-open')
//         modal.classList.remove('modal-close');
//         setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }

//Task2

// function changeFontSize(target) {
//         var para = document.getElementById("para");
//         var computedStyle = window.getComputedStyle
//               ? getComputedStyle(para) 
//               : para.currentStyle;     
//         var fontSize;
      
//         if (computedStyle) { 
//             fontSize = parseFloat(computedStyle && computedStyle.fontSize);
      
//             if (target == document.getElementById("button1")) {
//               fontSize += 5;
//             } else if (target == document.getElementById("button2")) {
//               fontSize -= 5;
//             }
//             para.style.fontSize = fontSize + "px";
//         }
// }


