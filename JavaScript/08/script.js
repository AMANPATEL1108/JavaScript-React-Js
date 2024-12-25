let btn1 = document.querySelector("#btn1");
let divbox = document.querySelector("#divbox");

// btn1.onclick = () => {
//   console.log("Btn 1 Clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };

// divbox.onmouseover = () => {
//   console.log("You are in Div");
// };

//Event Object

// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clentX, e.clientY);
// };

// btn1.addEventListener("click", (evt) => {
//   console.log("Btn 1 Was Clicked 1 St Time");
// });
// btn1.addEventListener("click", () => {
//   console.log("Btn 1 Was Clicked 2 nd Time");
// });

// const handler3 = () => {
//   console.log("Btn 1 Was Clicked 3 rd Time");
// };
// btn1.addEventListener("click", handler3);
// btn1.addEventListener("click", () => {
//   console.log("Btn 1 Was Clicked 4 th Time");
// });

// btn1.removeEventListener("click", handler3);

// Question-1

let mode = document.querySelector("#mode");
let currMdde = "light";
let body = document.querySelector("body");

mode.addEventListener("click", () => {
  if (currMdde === "light") {
    currMdde = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMdde = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMdde);
});
