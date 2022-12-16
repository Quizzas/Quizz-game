import { submit } from "./modules/q&aDisplay.js";
//layout stuff
const quizzDisplay = document.getElementById("quizz");
const startContainer = document.getElementById("start-container");
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function () {
  console.log("click");
  startContainer.classList.add("d-none");
  quizzDisplay.classList.remove("d-none");
});
submit();
//restart
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", function () {
  startContainer.classList.remove("d-none");
  startContainer.classList.add("d-block");
  location.reload();
});
//end
//************************************