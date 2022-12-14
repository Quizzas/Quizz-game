import { questions } from "../data.js";


export const dataCopy = questions.slice(0);
const text = document.querySelector('.text');
 
  const answers = document.querySelector(".answers");

  export const submit = () => {
  
  clear();
  text.innerText = dataCopy[0].question;
 
  
  if (dataCopy[0].answers) {
    dataCopy[0].answers.forEach((answer) => {
      const div = document.createElement("div");
      div.className = answer.isCorrect;
      const p = document.createElement("p");
      p.innerText = answer.text;
      div.appendChild(p);
      answers.appendChild(div);
      p.addEventListener('click', submit);
    });
    dataCopy.shift();
  }
};

    function clear() {
        while (answers.firstChild) {
            answers.removeChild(answers.firstChild);
        }
    };