//Function
// function myfun() {
//   console.log("Welcome to Function");
// }

// function myfun2(msg) {
//   console.log(msg);
// }
// myfun2("Hello Aman");

// function sum(a, b) {
//   return a + b;
// }

//Arrow Function--------------

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(5, 7));

// const mul = (a, b) => {
//   return a * b;
// };

// console.log(mul(5, 7));

// Question-1
//Simple Function
// let count = 0;
// function calVowels(str) {
//   for (const char of str) {
//     if (
//       "a" == char ||
//       "e" == char ||
//       "i" == char ||
//       "o" == char ||
//       "u" == char
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(calVowels("aman"));

// Question - 2;
//Arrow FUnction
// let count = 0;
// const calVowels = (str) => {
//   for (const char of str) {
//     if (
//       "a" == char ||
//       "e" == char ||
//       "i" == char ||
//       "o" == char ||
//       "u" == char
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(calVowels("aman"));

//For-Each Loop
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val, idex, arr) => {
//   console.log(val, idex, arr);
// });

// Question-1

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((nums) => {
//   console.log(nums * nums);
// });

//-------
// let calcSquare = (nums) => {
//   console.log(nums * nums);
// };

// arr.forEach(calcSquare);

//Map Methods
// let arr = ["Aman", "Patel", "Arj"];

// let newArr = arr.map((val) => {
//   return val;
// });

// console.log(newArr);

//Filter Methods

// let arr = [1, 2, 3, 4];
// let newArr = arr.filter((val) => {
//   return val % 2 == 0; //condition
// });
// console.log(newArr);

//Reduce Method

// const output = arr.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(output);

// let arr = [1, 5, 9, 6, 5, 7];
// const output = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });

// console.log(output);

//Question-1

// let arr = [67, 89, 90, 87, 98, 95, 56, 78];

// let ans = arr.filter((val) => {
//   return 90 < val;
// });

// console.log(ans);

// Question-2

let n = prompt("Enter a Number:");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});

console.log("Sum=".sum);

let fac = arr.reduce((res, curr) => {
  return res * curr;
});
console.log("Factorial=", fac);
