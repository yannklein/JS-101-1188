// ARRAY CRUD
const students = ['Ryan', 'Kim', 'Sarah'];

// Create
students.push("Isabel")
console.log(students);

// Read
console.log(students[3])

// Update
students[3] = "Super Isabel"
console.log(students);

// Delete
students.splice(3, 1) // remove 1 element from index 3
console.log(students);

// Iterate
// JS arrow function: () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});