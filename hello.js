// console.log("Hello Radek!")

// console.log(typeof("hello"));
// console.log(typeof(12));
// console.log(typeof(12.3));
// console.log(typeof(true));

// console.log((42).toString());
// console.log(parseInt("42", 10));
// console.log(parseFloat("42.3", 10));

const student = "SArAh";
let age = 21;

// console.log(`${student} is ${age}`);
// let can be re-assigned
age += 1;
// console.log(`${student} will be ${age} next year.`);

// student = "Super Sarah";
// console.log(`${student} is ${age}`);

// console.log(student.length);
// console.log(student[0]);
// console.log(student.slice(1)); // from index 1 to the end
// console.log(student.slice(1, 3)); // from index 1 to 3 excluded
// console.log(student.substring(1, 3)); // from index 1 to 3 excluded

// console.log(student.toUpperCase());
// console.log(student.toLowerCase());
// no capitalize methods!

const students = ["Sarah", "Tim", "Jeremy" ]
// console.log(students.join());
// console.log(students.join(""));
// console.log(students.join("-"));
// console.log(students.join(", "));

const students_string = students.join(" ")
console.log(students_string);
console.log(students_string.split());
console.log(students_string.split(" "));
