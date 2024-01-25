// SCOPES
// In JS refers to the visibility of the variables

// GLOBAL SCOPE
const userName = "Marina"; // this variable can be used everywhere

function sayHi(){
    console.log("Hi,",userName);
}

sayHi()

// BLOCK SCOPE
for (let i = 0; i < 10; i++) {
    const word= "CARAMELLA GIRLS" // this variable is block scoped
    console.log(word);
}
// console.log(word); THIS DISPLAYS AN ERROR. word is not defined

var song = "Song 2 by Blur";

function playSong(){
    var song = "Gasolina by Daddy Yankee"
    console.log(`We are playing ${song}`);
}

var song = "Loba by Shakira"  // with var we can redeclare variables. This can cause headache



playSong();
console.log(song);

let number = 34;

number = 45; // we can change the value of a let variable with this sintax. We are not going to change it by mistake if we declare a variable with the same name.

// FUNCTION SCOPE
function myFunction (){
    // all variables declared here are accessible only here
    const name = "John";
    const surName = "Doe";
}

// HOISTING
// Is a JS mechanism 

sayMyName() // this works because of hoisting

function sayMyName(){
    const name = "Heisenberg"
    console.log(name);
};

// sayAge() this doesn't work because sayAge is stored in a const variable

const sayAge = function (){
    const age = 24;
    console.log(`You are ${age}`);
}

console.log(bootcamp); // undefined
var bootcamp = "Web dev";

// console.log(anotherBootcamp); // ERROR
const anotherBootcamp = "Data";

// SHADOWING

const character = "Super Mario"

function selectCharacter(){
    const character = "Luigi" // this is shadowing because the global variable character is shadowed by this one.
    console.log("Your player is:", character);
}

selectCharacter();
console.log(character);

function myfucntionBlaBlaBla(){
    
}