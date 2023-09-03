// #1
let like = document.querySelector(".like");
let times = 0;
like.addEventListener("click", (e) => {
  e.target.classList.add("like-biger");
  times++;
  if (times === 2) {
    times = 0;
    e.target.classList.toggle("like-biger");
  }
});

let openBtn = document.querySelector(".button");
openBtn.addEventListener("click", () => {
  let window = document.querySelector(".window");
  window.style.display = "block";
});

let delateBtn = document.querySelector(".delate-btn");
delateBtn.addEventListener("click", () => {
  let window = document.querySelector(".window");
  window.style.display = "none";
});

let newWindowBtn = document.querySelector(".create-new-window");
function getRandom(max) {
  return Math.floor(Math.random() * max);
}
newWindowBtn.addEventListener("click", (e) => {
  let newWindow = document.createElement("div");
  newWindow.style.position = "absolute";
  newWindow.style.left = getRandom(100) + "vw";
  newWindow.style.top = getRandom(100) + "vh";
  newWindow.classList.add("new-window");
  document.body.prepend(newWindow);
  newWindow.innerHTML = `
  <button class="like style">like</button>
      <button class="delate-btn style">delete</button>
      <button class="create-new-window style">create new window</button>
  `;
});

// #2
let paper = document.querySelector(".p");
let scissors = document.querySelector(".s");
let stone = document.querySelector(".st");
let result = document.querySelector(".result");

function comp() {
  let choice = ["бумага", "ножиці", "камінь"];
  let random = Math.floor(Math.random() * 3);
  return choice[random];
}
function check(userChoice) {
  if (userChoice === comp()) {
    result.innerText = "нічия";
  } else if (
    (userChoice === "камінь" && comp() === "ножиці") ||
    (userChoice === "бумага" && comp() === "камінь") ||
    (userChoice === "ножиці" && comp() === "бумага")
  ) {
    result.innerText = "ви виграли";
  } else {
    result.innerText = "ви програли";
  }
}
paper.addEventListener("click", (e) => check("бумага"));
scissors.addEventListener("click", (e) => check("ножиці"));
stone.addEventListener("click", (e) => check("камінь"));
