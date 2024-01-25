// VALUES AND REFERENCES

// CREATING COPIES OF PRIMITIVE VALUES
let x = 10;
let y = x; // this is a copy 

x = 20;
console.log(y, x);

// OMG NOW IS WHEN THE HEADACHE STARTS 😅

// NON - PRIMITIVE VALUES

const arrayOfNames = ['John', 'Emma', 'Michael', 'Olivia', 'William', 'Sophia', 'James', 'Ava', 'Benjamin', 'Isabella'];

const anotherArrayOfNames = arrayOfNames; // WE ARE NOT CREATING A COPY, WE ARE CREATING A REFERENCE

console.log("FIRST ARRAY: ", arrayOfNames);
console.log("SECOND ARRAY: ", anotherArrayOfNames);

anotherArrayOfNames.unshift("Bárbara");

console.log("FIRST ARRAY: ", arrayOfNames);
console.log("SECOND ARRAY: ", anotherArrayOfNames);

// SAME THING WITH OBJECTS BECAUSE THEY ARE NON PRIMITIVE VALUES

const objectA = {
    name: "Marcel",
    age: 20,
    email: "marcel@msn.com",
    isABoomer: false
}

const objectB = objectA;

objectB.isMillenial = true;

console.log(`OBJECT A IS NOW:`, objectA);
console.log(`OBJECT B IS NOW:`, objectB);

// HOW DO WE CREATE COPIES THEN???

const numbersArray = [23, 2331, 123, 5532, 432];
const copyOfNumbers = [...numbersArray]// spread operator

copyOfNumbers.unshift("HELLOOOO THIS IS A COPY");

console.log("NUMEBRS ARRAY: ", numbersArray);
console.log("COPY: ", copyOfNumbers);

// COPIES OF OBJECTS:

const myPet = {
    name: "Sila",
    type: "Cat",
    color: "Black"
};

const malusPet = { ...myPet }
malusPet.name = "Tofu"
malusPet.color = "White"

console.log(myPet, malusPet);

const letsMakeItSuperHard = {
    campus: "Barcelona",
    students: ["Kumar", "Gavin", "Malú", "Barbi"],
    modules: {
        module1: "Front",
        module2: "React",
        module3: "Backend"
    }
}

const copySuperHard = { ...letsMakeItSuperHard }

copySuperHard.campus = "Madrid"; // 
copySuperHard.modules.module2 = "Angular"; // we are changing both of them
copySuperHard.students.push("Hugh Jackman"); // we are changing both of them
console.log(letsMakeItSuperHard, copySuperHard);

const superSuperCopyTheRealOneThisTime = Object.assign({}, letsMakeItSuperHard);
superSuperCopyTheRealOneThisTime.modules.module2 = "VueJS";
console.log(superSuperCopyTheRealOneThisTime);

const cities = ["Lagos", "Cairo", "Nairobi", "Johannesburg", "Casablanca"];

const copyOfCities = cities.map((eachCity) => eachCity);
copyOfCities.unshift({ name: "Barcelona", population: "a lot" });
console.log(cities, copyOfCities);

const exactCopy = Array.from(copyOfCities) // DOES NOT CREATE A COPY OF THE NON PRIMITIVE VALUES

exactCopy[0].name = "Madrid"

console.log(copyOfCities, exactCopy);

const trueExactCopy = JSON.parse(JSON.stringify(copyOfCities))
const json = '{"result":"saddsdsa", "count":42, "boolean": false}';
const parseedString = JSON.parse(json)
trueExactCopy[0].name = "Lugo";

console.log(trueExactCopy);