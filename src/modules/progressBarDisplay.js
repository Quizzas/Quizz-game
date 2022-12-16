import { questions } from "../data.js";

export const displayProgressBar = () => {
  const progressBarArray = [];

  for (let i in questions) {
    progressBarArray.push(questions[i].id);
  }

  const progressDiv = document.querySelector(".progress");

  progressBarArray.map((prog) => {
    const progressBar = document.createElement("span");
    progressBar.id = prog;
    progressBar.innerText = prog;
    progressDiv.appendChild(progressBar);
  });

  return progressBarArray;
};
