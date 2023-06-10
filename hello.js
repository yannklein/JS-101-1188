// console.log("Hello!");

// console.log(typeof 42);
// console.log(typeof 42.5);
// console.log(typeof true);
// console.log(typeof "hello");

// naming convention  of JS is lowerCamelCase
// method's () are mandatory
// console.log((42).toString());
// console.log(typeof (42).toString());
// console.log(parseInt("42", 10));
// console.log(parseFloat("42.5", 10));
// console.log(parseInt("101", 10));
// console.log(parseInt("101", 2));

// const student = "Valerie";
// let age = 21;

// console.log(`${student} is ${age} years-old.`);
// age += 1;
// student = "Super Valerie";
// console.log(`${student} is ${age} years-old next year.`);
// console.log(student + " is " + (age + 1) + " years-old next year.");

const student = "vAlerie";

console.log(student[0]);
console.log(student.length);
// size doesn't work!
console.log(student.slice(1)); // everything from index 1
console.log(student.slice(1, 4)); // everything from index 1 to index 4 excluded

console.log(student.toLowerCase());
console.log(student.toUpperCase());
// no capitalize method in JS!

const students =  ['Curtis', 'Kiyoe', 'Joe'];

const studentsString = students.join()
// JOIN adds commas in JS!!!
console.log(studentsString);
console.log(students.join('~'));

console.log(studentsString.split());
console.log(studentsString.split(''));
console.log(studentsString.split('-'));

console.log(`Hello batch
 1188`);