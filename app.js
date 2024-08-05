
//creating an array
let fruits = ["apple","strawberry", "cherry", "orange"];
//Variables can work as index nums
var one = 1;


console.log(fruits);
console.log(fruits [3]);
console.log(fruits [one]);

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
//Random numbers
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
let boo3 = "4";

console.log(boo2 == boo3)

//Strictly Equals to "==="

console.log(boo2 === boo3);