console.log("app loaded.");

var score = 0;
var titlePhoto = "../img/PhotoTitle.jpg";
var scorePhoto = "../img/FinalScore.jpg";

// TODO: Final Results Photo with add core tally 
//       and Play Again to this array?
var quizPhotos = [
  {
    memoPhoto:  "../img/Photo01.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What color was the bottle?",
    a: "white",
    b: "dark",
    answer: "b"
  },
  {
    memoPhoto:  "../img/Photo02.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What was hanging from the window?",
    a: "a flag",
    b: "laundry",
    answer: "b"

  },
  {
    memoPhoto:  "../img/Photo03.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What color were the old man's pants?",
    a: "black",
    b: "green",
    answer: "a"
  },
  {
    memoPhoto:  "../img/Photo04.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What color were the boom-boxes?",
    a: "black and white",
    b: "grey and black",
    answer: "b"
  },
  {
    memoPhoto:  "../img/Photo05.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "what did the street sign read?",
    a: "a speed limit",
    b: "there was no street sign",
    answer: "a"
  }
];

//MADE QUESTION APPEARS WITH PHIL
var count = 0;
var quizQnAresults = function() {
  // //when i call this function I want to change the image 
  // console.log(quizPhotos);
  var question = quizPhotos[count].question;
  // grab the question and need to put it in my html
  $("#question").text(question);
}

// TODO: write functions that adds a photo on page.. 
//       and click events?

$(function() {
  //the click fucntion hides the title photo and shows the 1st quiz photo (ID of "photo1")
  $(".start-trigger").on("click", function() {
    $("#title").hide();
    $("#photo1").show();
  });

  $("#next-photo").on("click", quizQnAresults);
});