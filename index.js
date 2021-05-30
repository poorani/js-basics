console.log("hello");

//primitive variables declaration

let sampleVar = 1; // number literal
const constatExample = 5; // constant definition
let isBoolean = true; // boolean literal
let undefExample = undefined;//undefined literal
let nullExample = null; // null literal , clear the value of a variable
let strExample = " string";//string example


console.log(sampleVar,strExample,isBoolean);


//reference variables

//objects
let nullExample2 = null; // null literal , clear the value of a variable , also an object variable
let person = {};
person={name:"john",
        age:40};
console.log(person);
//dot notation
person.name = "poorani";
console.log(person.name);

//bracket notation
let selection = "newname"; // base on variable - user selection as a usecase
person[selection] = "peter";

console.log(person['name']);
console.log(person[selection]);
console.log(person);
//arrays

let coloursArray = [];
coloursArray=["green","red"];
coloursArray[2] = 3; // diffrent type and different length

console.log(typeof[coloursArray]); // array is an object type


//functions

function greet(name,lastName)
{
    console.log("hello " + name+" " +lastName);
}

greet("john");
greet("john","smith");



