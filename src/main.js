import { questions } from "./data.js";

import { dataCopy } from "./modules/q&aDisplay.js";

import { displayProgressBar } from "./modules/progressBarDisplay.js";

//*****************layout*******************
//start
const quizzDisplay = document.getElementById("quizz");
const startContainer = document.getElementById("start-container");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  startContainer.classList.add("d-none");
  quizzDisplay.classList.remove("d-none");
});
//end
//************************************

import { submit } from "./modules/q&aDisplay.js";
submit();
displayProgressBar();

//*****************restart*******************
//start
const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", function () {
  startContainer.classList.remove("d-none");
  startContainer.classList.add("d-block");
  location.reload();
});
//end
//************************************
