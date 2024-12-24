//For Loops
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//While Loop

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//Do while-Loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//For-of-Loops

// let str = "Aman Patel";

// for (let i of str) {
//   console.log(i);
// }

//For-in-Loops
// let student = {
//   name: "Aman Patel",
//   age: 21,
//   cgpa: 7.5,
//   isPAss: true,
//   Address: "bayad",
//   Class: "b",
// };

// for (let i in student) {
//   console.log(i, "=", student[i]);
// }

// Question-1

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//Question-2

// let gameNumber = 25;
// let userNum = prompt("Guess a Number");

// while (gameNumber != userNum) {
//   userNum = prompt("You Enterd Wrong Number");
// }

// console.log("Congratulation you Guess Righy Number");

//Stringss

// let str = "Aman Patel";
// let str2 = "Patel Aman";

// console.log(str.length); //10
// console.log(str[2]); //a

//Templete Leterals

// let obj = {
//   item: "pen",
//   price: 25,
// };
// let Sentense = `Item is  ${obj.item} and Price is ${obj.price} `;
// console.log(Sentense);

//String Methods

// let str = "        Aman Patel";

// let up = str.toUpperCase();
// let Down = str.toLowerCase();
// let trm = str.trim();
// console.log(up);
// console.log(Down);
// console.log(trm);

//-----

// let str = "1234567";
// let str2 = "89";
// console.log(str.slice(0, 5));
// console.log(str.concat(str2));
// console.log(str.replace(5, 6));
// console.log(str.charAt(3));

//Question-1

let fullName = prompt("Enter a Name Without Spaces:");
let username = "@" + fullName + fullName.length;
console.log(username);
