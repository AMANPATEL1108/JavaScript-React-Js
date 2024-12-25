// let headings = document.getElementsByClassName("heading");
// console.log(headings);

// let paragrabh = document.getElementsByTagName("p");
// console.log(paragrabh);

// let firstEl = document.querySelector("h1");
// console.log(firstEl);

// let allEl = document.querySelectorAll("h1");
// console.log(allEl);

// let div = document.querySelector("div");
// console.dir(div);

// Question -1

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " From I am here";

//Question-2

let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new Unique value 1";
// divs[1].innerText = "new Unique value 2";
// divs[2].innerText = "new Unique value 3";
//---------
let idx = 0;
for (div of divs) {
  div.innerText = ` Updated ${idx}`;
  idx++;
}
