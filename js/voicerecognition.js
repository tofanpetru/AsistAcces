var SpeechRecognition = window.webkitSpeechRecognition;

var recg = new SpeechRecognition();

var emailinput = $("#email");

var emailContent = "";

recg.continuous = true;

recg.onresult = function (event) {
  var curr = event.resultIndex;

  var transcript = event.results[curr][0].transcript;

  emailContent += transcript;
  emailinput.val(emailContent);
};

recg.onerror = function (event) {
  if (event.error == "no-speech") {
    instructions.text("Try again.");
  }
};

$("#email-btn").on("click", function (e) {
  if (emailContent.length) {
    emailContent += "";
  }
  recg.start();
});

emailinput.on("emailv", function () {
  emailContent = $(this).val();
});
