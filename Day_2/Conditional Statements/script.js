//* comparison Operators

let a = 5;
let b = "5";

// console.log("a =", a, "& b =", b);
// console.log("a == b :", a == b);
// console.log("a === b :", a === b);
// console.log("a != b :", a != b);
// console.log("a !== b :", a !== b);

//* Conditonal Statments

let age = 20;
if (age < 18) {
  //   console.log("you are young");
} else if (age > 60) {
  //   console.log("You are old");
} else {
  //   console.log("You are in middle");
}

//* Ternary Operator

let newAge = 19;
let ageCheck = newAge > 18 ? "you are adult" : "You are not adult";
// console.log(ageCheck);

//* Practice-1

let num = prompt("Enter Number :");
if (num % 5 === 0) {
  console.log(num, "is multiple of 5");
} else {
  console.log(num, "is not multiple of 5");
}

//* Practice-2

let score = prompt("Enter student's score :");
let studGrade;
if (score <= 49) {
  studGrade = "F";
} else if (score > 49 && score <= 59) {
  studGrade = "D";
} else if (score > 59 && score <= 69) {
  studGrade = "C";
} else if (score > 69 && score <= 89) {
  studGrade = "B";
} else {
  studGrade = "A";
}
console.log("Student's obtained grade is :", studGrade);
