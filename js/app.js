console.log("app loaded.");

var score = 0;
var titlePhoto = "../img/PhotoTitle.jpg";
var scorePhoto = "../img/FinalScore.jpg";

var currentQuizPhoto = 0;

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
    question:   "who was sleeping on the ground?",
    a: " some dogs",
    b: "some dudes",
    answer: "b"
  }
];

// check if answer is right or wrong
var isRight = function(photoNumber, playerAnswer) {
  return playerAnswer === quizPhotos[photoNumber].answer;
};


// the click fucntion hides the title photo and shows 
// the 1st quiz photo (ID of "photo1")
var hideTitleShowMemoPhoto = function() {
  $(".title-photo-template").hide();
  $(".memo-photo-template").show();
};

/* UPDATE MEMO PHOTO FUNCTIONS */

var hideQNAShowMemoPhoto = function(){
  
  $(".qna-photo-template").hide();
  //added if and else statement for showScore//
  if (currentQuizPhoto < 4) { 
  $(".memo-photo-template").show();
  // add the correct image class for the current quiz photo 
  $(".memo-photo-template").removeClass("photo" + currentQuizPhoto);
  currentQuizPhoto = currentQuizPhoto + 1; 
  $(".memo-photo-template").addClass("photo" + currentQuizPhoto);
  //add if else statement here for 'showScore'
  } else{
    showScore();
  }

};


/* UPDATE QNA PHOTO FUNCTIONS */

var hideMemoPhotoShowQNA = function() {

  $(".memo-photo-template").hide();
// ADDED IF ELSE FOR FINAL SCORE PHOTO
if(currentQuizPhoto < 5) {
  $(".qna-photo-template").show();
  // 1. update question
  $("#question").text(quizPhotos[currentQuizPhoto].question);
  // 2. update a
  $("#a").text(quizPhotos[currentQuizPhoto].a);
  // 3. update b
  $("#b").text(quizPhotos[currentQuizPhoto].b);
  // 4. reset "answer"
  $("#answer").text("?");
}else {
    showScore();

  }
};

var showScore = function(){
  $(".final-score-template").show();
  $("#your-score").text(score);
};


//TODO RESTART GAME BY CLICKING the #PLayer-2-be
// var RestartGame = function(){
//   $("#player2-begin").on("click")

// };

//TODO: I NEED TO HAVE FINAL PHOTO SHOW AFTER CLICKING ON SEE YOUR SCORE
// this is what happens when I click on an answer choice
var clickOnChoice = function () {

  if (isRight(currentQuizPhoto, this.id)) {
    if (currentQuizPhoto === 4 ){
       $("#answer").text("Right On! (See your score!)");
        $("#answer").on('click', showScore);
       score = score + 1;
    }else{
        $("#answer").text("Right On! (see next photo)");
       score = score + 1;
      }
   
  } else {
    if(currentQuizPhoto === 4){
      $("#answer").text("NO! (See your score!)");
      $("#answer").on('click', showScore);
    } else{
    $("#answer").text("NO! (see next photo)");
    }
  }
}

//ADDING NEW FUNCTION THAT ADDS SCORE
// var keepScore = function(score) {
//   return score += 1;
// }

$(function() {
  // when i click on "start game"
  $(".start-trigger").on("click", hideTitleShowMemoPhoto);

  // when i click on a memo photo i go to a qna photo
  //TODO: once setInterval is set delete this cancel this.
  $(".memo-photo-template").on("click", function() {
    hideMemoPhotoShowQNA();
  });
  //TODO: 
  // when i click on a choice...
  $(".choice").on("click", clickOnChoice);

  // on clicking the answer, we:
  //  1. update the memo photo class
  //  2. switch back to memo photo
  $("#answer").on("click", hideQNAShowMemoPhoto);

  //when i click on last photo's 'answer'

});
