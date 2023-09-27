const quizForm = document.querySelector(".quiz-form");

const questionOneOptions = document.getElementsByName("question1");
const questionTwoOptions = document.getElementsByName("question2");

const outputEl = document.getElementById("output");

const correctAnswers = ["90°", "right angled"];

// const calculateScore = () => {
//   let score = 0;
//   for (let i = 0; i < questionOneOptions.length; i++) {
//     if (
//       questionOneOptions[i].checked &&
//       questionOneOptions[i].value === correctAnswers[0]
//     ) {
//       score++;
//     }
//   }
//   for (let i = 0; i < questionTwoOptions.length; i++) {
//     if (
//       questionTwoOptions[i].checked &&
//       questionTwoOptions[i].value === correctAnswers[1]
//     ) {
//       score++;
//     }
//   }
//   return score;
// };

const calculateScore = () => {
  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);
  for (let entry of formResults) {
    const [_, userAnswer] = entry;
    if (userAnswer === correctAnswers[index]) {
      score++;
    }
    index++;
  }

  return score;
};

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userScore = calculateScore();
  outputEl.innerText = `Your score is: ${userScore}`;
});
