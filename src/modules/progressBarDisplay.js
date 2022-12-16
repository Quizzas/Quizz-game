import { questions } from "../data.js";

export const displayProgressBar = () => {
  const progressBarArray = [];

  for (let i in questions) {
    console.log(questions[i].id);
    progressBarArray.push(questions[i].id);
  }

  const progressDiv = document.querySelector(".progress");

  progressBarArray.map((prog) => {
    const progressBar = document.createElement("span");
    progressBar.innerText = prog;
    progressDiv.appendChild(progressBar);
  });
};
