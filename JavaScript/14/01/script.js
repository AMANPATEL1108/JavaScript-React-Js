const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("Getting Data....");
  let response = await fetch(URL);
  console.log(response);

  let data = await response.json();
  facrPara.innerText = data[0].innerText;
};

// function getfacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[0].innerText;
//     });
// }

btn.addEventListener("click", getFacts());
