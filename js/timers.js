console.log("timers loaded.");

// Storing the starting time in seconds into startTime variable.
var startTime = 60;
$("#game-timer").text(startTime);

// Function that decreases the timer by 1 second.
function decreaseTimeBy1Second() {
  if (startTime === 0) {
    $("#gameover").show();
  } else {
    startTime = startTime - 1;
    $("#game-timer").text(startTime);
  }
}

// i want the PhotoStartTime to "start" as soon as Photo 01
// shows on the screen and when it reaches 0 for photo 01 to hide and results 1 to show
function decreasePhotoTimer() {
  if (photoStartTime === 0) {
//TODO need to start timer and find a way to reset it.
    // hideQNAShowMemoPhoto();
    // $("#photo1").hide();
    // $("#qNa-results1").show();
    // $("#results1").append("What Color Was The Bottle?");
  } else {
    photoStartTime = photoStartTime - 1;
    $("#photo-timer").text(photoStartTime);
  }
}

var photoStartTime = 4;

// this function starts the 60 sec timer for game when user clicks
// on "START GAME NOW" on "#title" page anchor tag has class of "start trigger"
// after 1st quiz photo shows the 4 second individual timer starts.
$(function() {
  $(".start-trigger").on("click", function() {
    $("#photo-timer").text(photoStartTime);
console.log("timer starter");
    //this method runs my function at 1 second intervals
    setInterval(decreaseTimeBy1Second, 1000);
    setInterval(decreasePhotoTimer, 1000);
  });
});
