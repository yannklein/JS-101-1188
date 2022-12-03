const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(student["firstName"]);
console.log(student.firstName);

student.firstName = "Super Boris";

console.log(student);

const myKey = "firstName";

console.log(student.myKey); // does not work!
console.log(student[myKey]);