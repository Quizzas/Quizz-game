import { questions } from "./data.js";

console.log(questions);

//layout stuff
const quizzDisplay = document.getElementById("quizz");
const startContainer = document.getElementById("start-container");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  startContainer.classList.add("d-none");
  quizzDisplay.classList.remove("d-none");
});
