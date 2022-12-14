import { questions } from "../data.js";

export const displayQandA = () => {
  const questionsArray = [];
  const answersArray = [];

  for (let i in questions) {
    console.log(questions[i].question);
    questionsArray.push(questions[i].question);

    for (let j in questions[i].answers) {
      console.log(questions[i].answers[j].text);
      answersArray.push(questions[i].answers[j].text);
    }
  }

  questionsArray.map((question) => {
    const myQuestion = document.querySelector(".text");
    const allQuestions = document.createElement('p');
    myQuestion.appendChild(allQuestions);
    allQuestions.innerText = question;
  });

  const myAnswer = document.querySelector(".answers");
  const answerDiv = document.createElement("div");

  myAnswer.appendChild(answerDiv);
  
  answersArray.map((answer) => {
    const answerP = document.createElement("p");
    answerP.innerText = answer;
    answerDiv.appendChild(answerP);
  });
};
