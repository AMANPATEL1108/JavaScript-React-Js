// //Proto Type

// const employee = {
//   calcTax() {
//     console.log("Tax rate is 10%");
//   },
//   //   calcTax2: function () {
//   //     console.log("Tax rate is 10%");
//   //   },
// };

// const karanArjun = {
//   salary: 50000,
//   calcTax() {
//     console.log("Tax rate is 20%");
//   },
// };

// karanArjun.__proto = employee;

//Classes
//Constructor

// class ToyotaCar {
//   constructor(brand, mileage) {
//     console.log("Createing new objuect");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("Start");
//   }
//   stop() {
//     console.log("Stop");
//   }
//   //   setBrand(brand) {
//   //     this.brandName = brand;
//   //   }
// }

// let fortuner = new ToyotaCar("Fortuner", 20);
// console.log(fortuner);
// // let lexuses = new ToyotaCar();
// // fortuner.setBrand("");
// // fortuner.start();
// // lexuses.stop();
//---------

//inheritance

// class Parent {

//   hello() {
//     console.log("This is Parent Hello");
//   }
// }

// class Child extends Parent {}

// let obj1 = new Child();
// console.log(obj1.hello());

// /Question-1

// let DATA = "Secreat Information";

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("data=", DATA);
//   }
// }

// let student1 = new User("Aman", "aman@gmail.com");
// let student2 = new User("pate", "Patel@gmail.com");

// let teacher1 = new User("Dean", "Dean@gmail.com");

//Question-2

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     DATA = "Some new Value";
//   }
// }

// // let Admin1 = new Admin("admin",admin@gmail.com);

//Error Handling

let a = 5;
let b = 10;

console.log("a=", a);
console.log("b=", b);
console.log("a+b=", a + b);
console.log("a=", a);
console.log("b=", b);
try {
  console.log("a+b=", a + b);
  console.log("a=", c);
  console.log("b=", b);
  console.log("a+b=", a + b);
} catch (err) {
  console.log(err);
}
