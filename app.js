var question1 = {
  q: "How many tickles does it take to make an octopus giggle?",
  a2: "6",
  a3: "7",
  a4: "8",
  correct: "10"
}

var question2 = {
  q: "What's a pirate's favorite letter?",
  a2: "B",
  a3: "A",
  correct: "R",
  a4: "Q"
}

var question3 = {
  q: "What did the buffalo tell his kid this morning?",
  correct: "Bye Son",
  a2: "Go Away",
  a3: "Buffabye",
  a4: "Yes"
}

var question4 = {
  q: "How many apples grow on trees?",
  a2: "4",
  correct: "All of them",
  a3: "7",
  a4: "Montana"
}

var question5 = {
  q: "What do you call a fake noodle?",
  a2: "Linguini",
  correct: "Impasta",
  a3: "Alfredo",
  a4: "Dinner"
}

var question6 = {
  q: "What do you call a man with a rubber toe??",
  correct: "Roberto",
  a2: "Steve",
  a3: "Daddy",
  a4: "Julia Styles"
}

var question7 = {
  q: "How do you kill a circus?",
  a2: "PETA",
  a3: "Slowly",
  a4: "Burn them baileys",
  correct: "Go for the juggler"
}

var question8 = {
  q: "An elephant that doesn't matter is...",
  a2: "Republican",
  correct: "Irrelephant",
  a3: "Dumbos Father",
  a4: "Dumbo"
}

var question9 = {
  q: "You hear about the guy who ate food coloring?",
  a2: "Yep",
  a3: "Nope",
  correct: "Didn't he dye?",
  a4: "Nebraska"
}

var question10 = {
  q: "What day is it?",
  a2: "Monday",
  a3: "Funday",
  a4: "Nothing matters",
  correct: "October"
}

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
var score = 0
var outOf = questionArray.length
var qIndex = 0
var number = 15
var timerInterval
var click
$(".final").hide()


// --TIMER--

function run() {
  clearInterval(timerInterval)
  timerInterval = setInterval(timeDown, 1000)
}


function timeDown() {
  number--

  $(".timer").text(number)

  if (number === 0) {
    nextQuestion()
    restartTimer()
    alert("Time's up!")
  }
}

function stopTimer() {
  clearInterval(timerInterval)
}

function restartTimer() {
  number = 15;
}

function restart() {
  clearInterval(intervalId);
  number = 15;
  run();
}

var nextQuestion = function () {
  qIndex++;
  restartTimer();
  endGame();
  makeQuestion()
}

var makeQuestion = function () {
  $(".question").text(questionArray[qIndex].q)

  var answers = Object.values(questionArray[qIndex])
  answers.shift()

  $('.answer1').text(answers[0])
  $('.answer2').text(answers[1])
  $('.answer3').text(answers[2])
  $('.answer4').text(answers[3])
}

click = $(document).on("click", "p", function () {
  var input = $(this).text()

  if (input === questionArray[qIndex].correct) {
    score++
    alert("Correct!");
    nextQuestion()
  } else {
    alert("Nope! The correct answer was " + questionArray[qIndex].correct);

    nextQuestion()
  }
})

var endGame = function () {
  if (qIndex === outOf) {
    $(".final").show()
    $(".questionsMain").hide()

    $(".fScore").text("Your score is: " + score + "/" + outOf)
  } else {
    return false
  }
}

$(document).on("click", ".tryAgain", function() {
  qIndex = 0
  $(".final").hide()
  $(".questionsMain").show()
  makeQuestion();
  restartTimer();
  score = 0
})

run();
makeQuestion();