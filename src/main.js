import { questions } from "./data.js";
import { qa } from "../src/modules/chooseAnswer.js";

// console.log(questions);

const text = document.querySelector(".text");
const progress = document.querySelector(".progress");

// ************ show questions and its answers ************
const questionsCopy = questions.slice(0);
questionsCopy.push(text);

let scores = 0;

qa();
