// //Synchronous
// // console.log("first");
// // console.log("Second");
// // console.log("Thhird");

// //unSynchronous

// // console.log("first");
// // console.log("Second");
// // console.log("Thhird");
// // function hello() {
// //   console.log("HEllo");
// // }

// // // setTimeout((hello) => {
// // //      hello();
// // // }, 5000);
// // setTimeout(hello, 2000);
// // //before Hello Print
// // console.log("for");
// // console.log("Five");
// // console.log("Six");

// //CallBack

// // function sum(a, b) {
// //   console.log(a + b);
// // }

// // function calculator(a, b, sumCallback) {
// //   sumCallback(a, b);
// // }

// // calculator(1, 2, sum);

// //-----------
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// //

// getData(1, () => {
//   getData(2);
// });
// // getData(1);
// // getData(2);
// // getData(3);

//Promises

let promise = new Promise((resolve, reject) => {
  console.log("I am a Promise");
  //   reject("Some Error occured");
});
