// console.log("app loaded.");

// var score = 0;
// var titlePhoto = "../img/PhotoTitle.jpg";
// var scorePhoto = "../img/FinalScore.jpg";

// var currentQuizPhoto = 0;

// // TODO: Final Results Photo with add core tally 
// //       and Play Again to this array?
// var quizPhotos = [
//   {
//     memoPhoto:  "../img/Photo01.jpg",
//     qNaResults: "../img/Results.jpg",
//     question:   "What color was the bottle?",
//     a: "white",
//     b: "dark",
//     answer: "b"
//   },
//   {
//     memoPhoto:  "../img/Photo02.jpg",
//     qNaResults: "../img/Results.jpg",
//     question:   "What was hanging from the window?",
//     a: "a flag",
//     b: "laundry",
//     answer: "b"
//   },
//   {
//     memoPhoto:  "../img/Photo03.jpg",
//     qNaResults: "../img/Results.jpg",
//     question:   "What color were the old man's pants?",
//     a: "black",
//     b: "green",
//     answer: "a"
//   },
//   {
//     memoPhoto:  "../img/Photo04.jpg",
//     qNaResults: "../img/Results.jpg",
//     question:   "What color were the boom-boxes?",
//     a: "black and white",
//     b: "grey and black",
//     answer: "b"
//   },
//   {
//     memoPhoto:  "../img/Photo05.jpg",
//     qNaResults: "../img/Results.jpg",
//     question:   "what did the street sign read?",
//     a: "a speed limit",
//     b: "there was no street sign",
//     answer: "a"
//   }
// ];

// // check if answer is right or wrong
// var isRight = function(photoNumber, answer) {
//   return answer === quizPhotos[photoNumber].answer;
// };


// // the click fucntion hides the title photo and shows 
// // the 1st quiz photo (ID of "photo1")
// var hideTitleShowMemoPhoto = function() {
//   $(".title-photo-template").hide();
//   $(".memo-photo-template").show();
// };

// /* UPDATE MEMO PHOTO FUNCTIONS */

// var hideQNAShowMemoPhoto = function(){
//   $(".qna-photo-template").hide();
//   $(".memo-photo-template").show();
//   // add the correct image class for the current quiz photo
//   $(".memo-photo-template").removeClass("photo" + currentQuizPhoto);
//   currentQuizPhoto = currentQuizPhoto + 1;
//   $(".memo-photo-template").addClass("photo" + currentQuizPhoto);
// };

// /* UPDATE QNA PHOTO FUNCTIONS */

// var hideMemoPhotoShowQNA = function() {
  
//   $(".memo-photo-template").hide();
  
//   if(currentQuizPhoto<5){  
//       $(".qna-photo-template").show();
//       // 1. update question
//       $("#question").text(quizPhotos[currentQuizPhoto].question);
//       // 2. update a
//       $("#a").text(quizPhotos[currentQuizPhoto].a);
//       // 3. update b
//       $("#b").text(quizPhotos[currentQuizPhoto].b);
//       // 4. reset "answer"
//       $("#answer").text("?");
//   }else {
//       showScore();
    
//   }
// };

// var showScore = function(){
    
// };
// // this is what happens when I click on an answer choice
// var clickOnChoice = function () {

//   if (isRight(currentQuizPhoto, this.id)) {
//     if (currentQuizPhoto === 4 ){
//        $("#answer").text("Right On! (See your score!)");
//     }else{
//         $("#answer").text("Right On! (see next photo)");
//       }
   
//   } else {
//     if(currentQuizPhoto === 4){
//       $("#answer").text("NO! (See your score!)"); 
//     } else{
//     $("#answer").text("NO! (see next photo)");
//     }
//   }
// }

// $(function() {
//   // when i click on "start game"
//   $(".start-trigger").on("click", hideTitleShowMemoPhoto);

//   // when i click on a memo photo i go to a qna photo
//   $(".memo-photo-template").on("click", function() {
//     hideMemoPhotoShowQNA();
//   });

//   // when i click on a choice...
//   $(".choice").on("click", clickOnChoice);

//   // on clicking the answer, we:
//   //  1. update the memo photo class
//   //  2. switch back to memo photo
//   //if there are photos we hide the current phot and show next
    
//   $("#answer").on("click", hideQNAShowMemoPhoto);

//   //when i click on last photo's 'answer'

// });













// //SCRATCH CODE

// function decreasePhotoTimer(){
//   if (photoStartTime === 0) {
//     // $("#photo1").hide();
//     $(quizPhotos[0].questionPhoto).hide();
//     // $("#results1").show();
//     $(quizPhotos[0].answerPhoto).show();
//   } else {
//     photoStartTime = photoStartTime -1;
//     $("#photo-timer").text(photoStartTime);
//   }
// }


// ////////
// /////////
// function decreasePhotoTimer(){
//   if (photoStartTime === 0) {
//     $("#photo1").hide(); 
//     $("#results1").show();
//   } else {
//     photoStartTime = photoStartTime -1;
//     $("#photo-timer").text(photoStartTime);
//   }
// }