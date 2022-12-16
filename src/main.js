import { questions } from "./data.js";

import { dataCopy } from "./modules/q&aDisplay.js"

import { displayProgressBar } from "./modules/progressBarDisplay.js"

//layout stuff
const quizzDisplay = document.getElementById("quizz");
const startContainer = document.getElementById("start-container");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  startContainer.classList.add("d-none");
  quizzDisplay.classList.remove("d-none");
});

import { submit } from "./modules/q&aDisplay.js"
submit()
displayProgressBar()