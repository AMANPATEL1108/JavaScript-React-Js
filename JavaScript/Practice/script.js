let tag1 = document.querySelector("#tag1");
let popup = document.querySelector("#popup");

tag1.addEventListener("click", () => {
  tag1.classList.add("blue");
});

popup.onclick = () => {
  alert("Are you Here??");
};
