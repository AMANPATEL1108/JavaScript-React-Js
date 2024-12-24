//ArithMetic Operators

let a = 6;
let b = 2;
// console.log("a+b=", a + b);

//Unary Operators
// console.log(a++);
// console.log(++a);

//Assignment Operatos

// a += 4;
// console.log("a", a);

//Comparision Operators

// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);

//Logical Operators
// let cond1 = a > b; //true
// let cond2 = a === 6; //true
// console.log(cond1 && cond2); //true
// console.log(!(cond1 && cond2)); //faslse

//Condition Statements

// let age = 25;
// if (age > 18) {
//   console.log("You Can Vote");
// }

// let mode = "dark";

// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "Pink";
// } else {
//   color = "White";
// }

// console.log(color);

//Ternary operators

// let age = 25;
// age > 18 ? "Adult" : "Not Adult";

//Switch

// const expr = "10";

// switch (expr) {
//   case "3":
//     console.log("This is 3");
//     break;
//   case "5":
//     console.log("This is 5");
//     break;
//   case "10":
//     console.log("This is 10");
//     break;
//   default:
//     console.log("Not Found NUmebr");
// }

// Question-1

// let num = prompt("Enter a Number");
// console.log(name);

// if (num % 5 == 0) {
//   console.log("Yes do");
// } else {
//   console.log("Not Do");
// }

//Question-2

let grade = prompt("enter a Marks:");

if (100 >= grade && 80 <= grade) {
  console.log("A");
} else if (89 >= grade && grade >= 70) {
  console.log("B");
} else if (69 >= grade && grade >= 60) {
  console.log("C");
} else if (59 >= grade && grade >= 50) {
  console.log("D");
} else if (49 >= grade && grade >= 0) {
  console.log("F");
} else {
  console.log("Enter a Correct Marks");
}
