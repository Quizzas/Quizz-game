"use strict";
import { questions as data } from "../data.js";
// console.log(data);

const topContainer = document.querySelector(".top-container");
const question = document.querySelector(".question");
const text = document.querySelector(".text");
const fail = document.querySelector(".fail");
const answers = document.querySelector(".answers");
const bottomContainer = document.querySelector(".bottom-container");
const bar = document.querySelector(".bar");
const progress = document.querySelector(".progress");
const buttons = document.querySelector(".buttons");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const fifty = document.querySelector(".fifty");

// ************ results ************
// const win = (result) => {
//   return {
//     id: data.length + 1,
//     question: `Your result is ${result}`,
//   };
// };

// ************ hide buttons bar ************

buttons.style.display = "none";

// ************ All questions id ************

const ids = [];
data.forEach((question) => {
  ids.push(question.id);
  const questionNumber = document.createElement("span");
  questionNumber.id = question.id;
  questionNumber.innerText = question.id;
  progress.appendChild(questionNumber);
});

// ************ show questions and its answers ************
const dataCopy = data.slice(0);
dataCopy.push(text);

let scores = 0;

export const qa = () => {
  text.innerText = dataCopy[0].question;
  const answers = document.createElement("div");
  answers.className = "answers";
  topContainer.appendChild(answers);

  // **************** paryskina einama klausima ****************
  ids.forEach((id, i) => {
    const span = document.getElementById(`${id}`);
    if (dataCopy[0].id == ids[i]) {
      span.style.fontWeight = "bold";
    } else {
      span.style.fontWeight = "normal";
    }
  });

  // **************** klausimai ir atsakymai ****************

  if (dataCopy[0].answers) {
    dataCopy[0].answers.forEach((answer, i) => {
      const div = document.createElement("div");
      div.className = answer.isCorrect;
      const p = document.createElement("p");
      p.innerText = answer.text;
      div.appendChild(p);
      answers.appendChild(div);

      div.addEventListener("click", () => {
        const span = document.getElementById(`${dataCopy[0].id}`);
        // console.log(span);
        if (answer.isCorrect) {
          dataCopy.shift();
          answers.remove();
          scores++;
          span.style.border = "2px solid green";

          qa();
        } else {
          dataCopy.shift();
          answers.remove();
          span.style.border = "2px solid red";
          qa();
        }
      });
      return scores;
    });
  } else {
    text.innerText = `Your result is ${scores} / ${data.length}`;
  }
};
// qa();
