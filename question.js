function Question(questionBody,answerOptions,rightAnswer)
{
this.questionBody = questionBody;
this.answerOptions = answerOptions;
this.rightAnswer = rightAnswer;

// console.log(this);

}

Question.prototype.checkAnswer = function(answer)
    {
        return answer === this.rightAnswer;
    }

let questions = [
     new Question("1-Aşağıdakilerden hangisi çiçek aşısıdır?",{
        a: "pentaxim",
        b: "prevenar",
        c: "varisella",
        d: "bsg",
    },"c"),

    new Question("2- Which of the following is .net is a package management application?",{
        a: "nuget",
        b: "Typescript",
        c: "NPM",
        d: "nugat",

    },"b"),

    new Question("3- Which of the following is .net is a package management application?",{
        a: "nuget",
        b: "Typescript",
        c: "NPM",
        d: "nugat",

    },"d"),

    new Question("4- Which of the following is .net is a package management application?",{
        a: "nuget",
        b: "Typescript",
        c: "NPM",

    },"c"),
];
