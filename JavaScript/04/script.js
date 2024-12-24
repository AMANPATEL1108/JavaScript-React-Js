// let data = [12, 56, "Aman", 45, 89];
// console.log(data);

// data.push("Patel");
// console.log(data);

//Array indices
// let marks = [15, 58, 78, 96, 58];

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// for (let i of marks) {
//   console.log(i);
// }

// Question-1

// let student = [85, 97, 44, 37, 76, 60];

// let sum = 0;
// for (let i of student) {
//   sum += i;
// }

// console.log(sum / student.length);

// Question-2

// let price = [250, 645, 300, 900, 50];
// let i = 0;

// for (let val of price) {
//   let offer = val / 10;
//   price[i] = price[i] - offer;
//   //   console.log(`value after offer =${price[i]}`);
//   i++;
// }

// console.log(price);

//Arrays Methods

// let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// num.pop();
// num.push(99);
// console.log(num);

// let name = ["Aman", "Patel", "Raj"];
// console.log(name.toString());
// console.log(num.concat(name));
// num.unshift("first");
// console.log(num);
// num.shift();
// console.log(num);
// console.log(num.slice(0, 3))

// let arr = [1, 2, 3, 4, 5, 6, 7];

// // arr.splice(2, 2, 101, 102);

// //add Elements
// // arr.splice(2, 0, 101);

// //remove
// arr.splice(3, 1);

// //replace
// arr.splice(3, 1, 101);

// console.log(arr);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// Asnwer-1
// companies.shift();
// ANswer-2
// companies.splice(2, 1, "ola");
//Answer-3
//companies.push("Amazon");
console.log(companies);
