// let numSiblings = prompt("'How many siblings do you have?");

//works as expexted with == operator

// if (numSiblings == 1) {
//   console.log("1 sibling!");
// } else if (numSiblings > 1) {
//   console.log("more than 1 sibling!");
// } else {
//   console.log("No siblings");
// }

// the the console displays no siblings
//becuase in the case of === it doesn't recognize the input
//(which is a string type) when === looks for the same exact type and value
// if (numSiblings === 1) {
//   console.log("1 sibling!");
// } else if (numSiblings > 1) {
//   console.log("more than 1 sibling!");
// } else {
//   console.log("No siblings");
// }

let numSiblings = Number(prompt("'How many siblings do you have?"));

if (numSiblings === 1) {
  console.log("1 sibling!");
} else if (numSiblings > 1) {
  console.log("more than 1 sibling!");
} else {
  console.log("No siblings");
}

// ('===') looks for the same exact data type and value.
//This can prevent unexpected behavior in your code.
//In this case, when comparing user input to a known numeric value,
//it's important to ensure that the input is treated as a number for
//accurate comparisons. Loose equality ('==') can lead to unintended results when comparing values of different types.
