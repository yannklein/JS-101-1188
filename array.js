// ARRAY CRUD
const students = ['Curtis', 'Kiyoe', 'Joe'];

// Create
students.push("Buruburu")
console.log(students);

// Read
console.log(students[1]);

// Update
students[1] = "Super Kiyoe"
console.log(students);

// Delete
students.splice(1, 1); // deletes from index 1, 1 element
console.log(students);

// Iterate
// JS arrow function: () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

const newArray = students.map((student) => {
  return `${student} is amazing!`;
});

console.log(newArray);