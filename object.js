const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(student['firstName']);
console.log(student.firstName);

student.firstName = "Super Boris";
console.log(student);

// Side note
const myKey = 'firstName';
// console.log(student.myKey); // GIVES UNDEFINED!!
console.log(student[myKey]);