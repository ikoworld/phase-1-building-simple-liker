// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeArr = document.querySelectorAll(".like-glyph"), 
  message = document.querySelector("#modal");

likeArr.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("activated-heart")) {
      element.classList.remove("activated-heart");
      mimicServerCall();
      element.textContent = EMPTY_HEART;
    } else {
      element.classList.add("activated-heart");
      mimicServerCall();
      element.textContent = FULL_HEART;
    }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
        message.classList.remove("hidden");
      } else {
        resolve("Pretend remote server notified of action!");
        message.classList.add("hidden");
      }
    }, 300);
  });
}
