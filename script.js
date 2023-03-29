const quiz = new Quiz(questions);
const ui = new UI();

let counter;

ui.btn_start.addEventListener("click", function () {
  startTimer(9);
  ui.quizbox.classList.add("active");

  ui.showQuestion(quiz.getQuestion());
});

ui.btn_next.addEventListener("click", function () {
    ui.time_second.textContent = "10";
  if (quiz.questions.length != quiz.questionIndex + 1) {
    ui.time_line.style.width = `0%`; 
    ui.time_text.textContent = "Remaining Time";
    ++quiz.questionIndex;
    ui.showQuestion(quiz.getQuestion());
    clearInterval(counter);
    time_line =0;
    startTimer(9);
   
  
  } else {
    ui.showScore(quiz.rightQuestionNumber);
    console.log("Quiz is completed.");
    ui.quizbox.classList.remove("active");
    ui.scorebox.classList.add("active");
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.rightQuestionNumber = 0;
  ui.btn_start.click();
  ui.scorebox.classList.remove("active");
});

const optionList = ui.option_list;

function optionselected(option) {
    clearInterval(counter);
  let answer = option.querySelector("span b .answer").textContent;
  let question = quiz.getQuestion();

  if (question.checkAnswer(answer)) {
    ++quiz.rightQuestionNumber;
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    option.classList.add("correct");
  } else {
    option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    option.classList.add("incorrect");
  }

  const optionL = optionList.querySelectorAll(".option");

  for (let i of optionL) {
    i.classList.add("disabled");
  }

  ui.btn_next.classList.add("show");
}

let time_line=0;

function startTimer(time) {
 
  counter = setInterval(timer, 1000);
  function timer() {
    ui.time_second.textContent = time;
    time--;
    time_line=9-time;
    ui.time_line.style.width = `${time_line}0%`; 
    // console.log(time);
    if (time < 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Time up!";
      const option = optionList.querySelectorAll(".option");
      let answer = quiz.getQuestion();
      // console.log(answer.rightAnswer);

      for (let opt of option) {
        if (
          opt.querySelector("span b .answer").textContent == answer.rightAnswer
        ) {
            opt.insertAdjacentHTML("beforeend", ui.correctIcon);
          opt.classList.add("correct");
        }

        opt.classList.add("disabled");
        ui.btn_next.classList.add("show");
        // console.log(opt.querySelector("span b .answer").textContent);
      }
    }
  }
}
