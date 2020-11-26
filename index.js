var readlineSync = require("readline-sync");

var score = 0;

// input >> processing >> output
var userName = readlineSync.question("What's your name? ");

var tanay=readlineSync.question("Welcome "+ userName + " DO YOU KNOW Tanay? ");
answer="yes"
if(tanay.toUpperCase=answer.toUpperCase)
{
  console.log("great")
}
else{
  console.log("oh aww, the quiz is about tanay")
}


// data of high score
var highScores = [
  {
    name: "Akshay",
    score: 5,
  },

  {
    name: "Darshan",
    score: 4,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log("ohh oh oh","the anser is" ,answer)
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where do tanay live? ",
  answer: "Bangalore"
}, {
  question: "tanay's favorite superhero would be? ",
  answer: "capAmerica"
},
{
  question: "Where do tanay work? ",
  answer: "Microsoft"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")
for(i=0;i<highScores.length;i++)
{
  console.log(highScores[i].name , highScores[i].score)
}
// 