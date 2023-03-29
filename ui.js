function UI()
{
    this.btn_start = document.querySelector(".btn-start"),
    this.scorebox = document.querySelector(".scorebox"),
    this.scoretext = document.querySelector(".score_text"),
    this.btn_next = document.querySelector(".btn-next"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.option_list = document.querySelector(".option_list"),
    this.time_line = document.querySelector(".time_line"),
    this.question_text = document.querySelector(".question_text"),
    this.question_index = document.querySelector(".quizbox .card-footer .question_index");
    this.time_text = document.querySelector(".quizbox .card-header .timer .time_text");
    this.time_second = document.querySelector(".quizbox .card-header .timer .time_second");
    this.quizbox = document.querySelector(".quizbox");
    this.correctIcon =`<div class="icon"><i class="fas fa-check"></i></div>`; 
    this.inCorrectIcon =`<div class="icon"><i class="fas fa-times"></i></div>`; 
    


}

UI.prototype.showQuestion = function (question)
{
this.question_text.innerHTML = `<span>
${question.questionBody}
</span> `;

let options =``;

for(let answer in question.answerOptions)
{
options += 
`
<div class="option">

<span><b class="d-flex"> <div class="answer">${answer}</div>: ${question.answerOptions[answer]}</b></span>
                
                
            </div>
`;
}


optionList.innerHTML=options;
const option = optionList.querySelectorAll(".option");

for(let opt of option)
{
    opt.setAttribute("onclick","optionselected(this)");
   
}
    
this.btn_next.classList.remove("show");
this.showQuestionNumber(quiz.questionIndex+1,quiz.questions.length);
}

UI.prototype.showQuestionNumber = function (questionOrder,totalQuestions )
{
let tag = `<span class="badge  bg-warning">${questionOrder} / ${totalQuestions}</span>`;
this.question_index.innerHTML=tag;

}

UI.prototype.showScore = function (rightAnswerNumber)
{
let tag = `You answered ${rightAnswerNumber} out of ${quiz.questions.length} questions correctly.`;
this.scoretext.innerHTML=tag;
}