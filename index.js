var readlineSync = require('readline-sync');

var score = 0;
var readName = readlineSync.question('Your name please? ');
console.log('\nWelcome '+readName+", let's see how much you know Me! \n");

 function quiz (question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log('You are right');
    score++;
    console.log("Score : ",score, "\n")

  } else {
    console.log('You are wrong '+'the right answer is '+ answer);
    score--;
    console.log("Score : ",score, "\n")

  }
  }

  var question = [ {
    question: "What is my fav programming language? ",
    answer: "Python",
  },{
    question: "Which programming language did I learned first? ",
    answer: "C",
  },{
    question: "What am I learning these days? ",
    answer: "ReactJS",
  },{
    question: "What is my Age? ",
    answer: "23",
  }, {
    question: "Which state I belong to? ",
    answer: "Rajasthan",
  },
  ]

  for (var i= 0 ; i < question.length; i++ ){
  var currentQuestion = question[i];
  quiz(currentQuestion.question,currentQuestion.answer)
}



console.log('Your final score is ' + score)
