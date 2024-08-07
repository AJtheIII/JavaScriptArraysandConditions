
//creating an array
let fruits = ["apple","strawberry", "cherry", "orange"];
//Variables can work as index nums
let kid= 1;


console.log(fruits);
console.log(fruits [3]);
console.log(fruits [kid]);

//updating array data
fruits[1]="blueberries";
console.log(fruits);

let officeCharacters =["Michael Scott", "Jim", "Dwight"];
console.log(officeCharacters);


// .push * adds new data to the end of the array
officeCharacters.push("Andy");
console.log(officeCharacters);

//.pop removes the last item in the array
officeCharacters.pop();
console.log(officeCharacters);

//.unshift * adds a new item to the front of the array
officeCharacters.unshift("Dwight");
console.log(officeCharacters);
console.log(officeCharacters.length);


//.shift = removes the first item in the array
officeCharacters.shift();
console.log(officeCharacters);

//.length = total number of items in an array
console.log(officeCharacters.length);

//Access Array Elements
//TODO Define an array of items
let items =["apple", "banana", "cherry", "date","elderberry"];

console.log(items);

//TODO Access Specific elements
let firstItem = items[0];
let thirdItem = items[2];
let lastItem = items [4];

//Output the results
console.log("Items: " + items);
console.log ("First Item: " + firstItem);
console.log("Third Item: " + thirdItem);
console.log("Last Item: " + lastItem);

// List of Favorite Movies
let favMovies =["The Harder They Fall", "Fun With Dick and Jane", "Lawless","Antonia's Line", "Hoodlum"]

console.log("Favorite Movies");
console.log(`Movie One: ${favMovies[0]}`);
console.log(`Movie Two: ${favMovies[1]}`);
console.log(`Movie Three: ${favMovies[2]}`);
console.log(`Movie Four: ${favMovies[3]}`);
console.log(`Movie Five: ${favMovies[4]}`);

// Sum of Array of Elements
let randomNums = [ 26, 18, 107, 415, 86 ]
let sum = randomNums[0] + randomNums [1] + randomNums [2] + randomNums[3] + randomNums[4]
console.log(sum);

//Concantenation
var textOne = "Coding as a";
var textTwo =" profession is looking";
var textThree =" slim.";

console.log(textOne + textTwo + textThree);

//Update Array Elements
let colors =["red", "blue", "green", "yellow", "purple"];
console.log(colors);

//green to cyan
//Random numbers...set to length of array
let rng = Math.floor(Math.random() * Math.floor(colors.length)) 

let number1 = Math.floor (2);
console.log(number1);

colors [2]= "cyan";
colors.pop();
colors.push("orange")


console.log(colors[rng]);


//CONDITIONS

let boo = false;
console.log(boo);
/*
"==" - is equal to
*/

let bar = 4 ==5-4
console.log(bar)


let boo2 ="4";
let boo3 = "5";
let boo4 = "four";

console.log(boo2 == boo3)
//!FALSE

//Strictly Equals to "==="

console.log(boo2 === boo3);
//!FALSE

//Not equal to "!="

console.log(boo3 != boo4);
//!TRUE

//Greater than ">"
console.log(boo3 > 6);
//!FALSE

//Less than "<"
console.log(boo3 < 6);
//!TRUE

//Less than or equal to "<="
console.log (boo3 <=4);
//!TRUE

//Greater than or equal to ">="
console.log(boo3 >= 6)
//!FALSE


//LOGICAL OPERATORS

// AND = &&
console.log("Double Ampersands " + (4 == 4 && 3==3));

//OR = "||"
console.log("Double LINES: " + (4 == 3 || 3 == 3));

//NOT = "!"
console.log("NOT: " + (!false));

// If Structure
if(boo3 == 4) {
   console.log("HEY I'm THE NUMBER 4!")
}

/*
!THESE ARE THE ONLY FALSY VALUES
- false
- 0 
- -0 
- 0n
- ""
- '' (empty strings)
- null 
- undefined
- NaN

*/

//If Else Structure
let amHungry = "";

if(amHungry) {
   console.log("Let's eat I want chicken nuggets!");
} else {
    console.log("Let's keep coding! Yay!");
};

//Else if Structure

let howHungry = 0;

if( amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry I can eat a horse.")
} 

else if (amHungry === true && howHungry >= 25){
    console.log("I'm hungry enough to eat cheez-its.")
} 

else if (amHungry === false && howHungry >= 25) {
    console.log("I'm depressed.")
} 

else {
    console.log("I'm not that hungry dude.")
};

//Switch Statements
switch (amHungry == true) {
    case howHungry >= 75:
        console.log("I'm so hungry I could eat a horse.")
        break;
    case howHungry >= 25:
        console.log("I'm hungry enought to eat cheez-its.")
        break;
    default:
            console.log("I just want to eat.")
}


//Arrays and Decisions Practice
//Define an array of favorite fruits
//Define a variable for the fruit to check
//* Check if the fruits is in the array and output the results

let fruitList = ["apple", "mango", "peach", "banana"];

let fruit ="peach"

console.log(fruit == fruitList [0]);

if (fruit == fruitList [1]){
    console.log("This is one of my favorite fruits.")
} else if(fruit == fruitList [1]){
    console.log("")
}


//Grade Categorizer
//Define a variable for the grade
let gradeNum= 95

//Categorize the grade
//output the result
if (gradeNum >= 90 && gradeNum <= 100){
    console.log("Grade: A");
} else if (gradeNum >= 80 && gradeNum <= 89){
    console.log("Grade: B");
} else if (gradeNum >= 70 && gradeNum <= 79){
    console.log("Grade: C");
} else if (gradeNum >= 60 && gradeNum <= 69){
    console.log("Grade: D");
} else if (gradeNum >= 0 && gradeNum <= 59){
    console.log("Grade: F")
}



//Day of the Week Checker
// Define an array of the days of the week
let dayWeek =["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//Define a variable for the day to check
let day = "Monday";
//Check if the day is a weekday or a weekend
//output the result
 if (day == dayWeek [0]|| day == dayWeek [1] || day == dayWeek [2] || day == dayWeek [3] || day == dayWeek [4]){
    console.log("This is a weekday.")
 };
 if (day == dayWeek [5] || day == dayWeek [6]){
    console.log("This is a weekend day.")
 };

//Temperature Checker
//Define a variable for the temperature
let currentTemp = 96
//Categorize the temperature and

if (currentTemp ==  >=  90 ){
    console.log("It's hot outside.")
};
else if (currentTemp == <=  89 && >=  68 ){
    console.log("It's nice outside.")
};
else if (currentTemp == <=  67  >=  58 ){
    console.log("It's cool outside.")
};
default{
    console.log("It's cold outside.")
}
//output the result


//Number Sign Checker
//Define a variable for the number
//Check the sign of the number
//* output the result