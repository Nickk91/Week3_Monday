let grade = prompt(`What is your grade?`);
let gradeUpper = grade.toUpperCase();

if (gradeUpper === "A") {
  console.log("Your score is between 90-100");
} else if (gradeUpper === "B") {
  console.log("Your score is between 80-89");
} else if (gradeUpper === "C") {
  console.log("Your score is between 70-79");
} else if (gradeUpper === "D") {
  console.log("Your score is between 65-69");
} else if (gradeUpper === "F") {
  console.log("Your score is between 0-64");
} else if (grade >= 90) {
  console.log("Your grade is  A");
} else if (grade >= 80) {
  console.log("Your grade is B");
} else if (grade >= 70) {
  console.log("Your grade is C");
} else if (grade > 65) {
  console.log("Your grade is  D");
} else if (grade <= 64) {
  console.log("Your grade is  F");
} else {
  alert("Input is invalid");
}

// let grade = Number(prompt(`What is your grade?`));

// if (grade >= 90) {
//   console.log("A");
// } else if ((grade) => 80) {
//   console.log("B");
// } else if ((grade) => 70) {
//   console.log("C");
// } else if ((grade) => 65) {
//   console.log("D");
// } else {
//   console.log("F");
// }
