import { questions } from "../data.js";
import { displayProgressBar } from "../modules/progressBarDisplay.js";

// ************ show questions and its answers ************
export const dataCopy = questions.slice(0);

const text = document.querySelector(".text");
const answersContainer = document.querySelector(".answers-container");
const progressBarArray = displayProgressBar()

dataCopy.push(text);
let scores = 0;

export const submit = () => {
  text.innerText = dataCopy[0].question;

  const answers = document.createElement("div");
  answers.className = "answers";
  answersContainer.appendChild(answers);

  if (dataCopy[0].answers) {
    dataCopy[0].answers.forEach((answer) => {
      const div = document.createElement("div");
      div.className = answer.isCorrect;
      const p = document.createElement("p");
      p.innerText = answer.text;
      div.appendChild(p);
      answers.appendChild(div);

      progressBarArray.forEach((id, i) => {
        const span = document.getElementById(`${id}`);
        if (dataCopy[0].id == progressBarArray[i]) {
          span.style.fontWeight = "bold";
          span.style.color = "white";

        } else {
          span.style.fontWeight = "normal";
          span.style.color = "default";

        }
      });

      div.addEventListener("click", () => {
        const span = document.getElementById(`${dataCopy[0].id}`);
        if (answer.isCorrect) {
          dataCopy.shift();
          answers.remove();
          scores++;
          span.style.border = "2px solid green";

          submit();
        } else {
          dataCopy.shift();
          answers.remove();
          span.style.border = "2px solid red";
          submit();
        }
      });
      return scores;
    });
  } else {
    text.innerText = `Your result is ${scores} / ${questions.length}`;
  }
};
