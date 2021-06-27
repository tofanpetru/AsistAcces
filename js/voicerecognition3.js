var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = $("#tel");

var Content = "";

recognition.continuous = true;

recognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  Content += transcript;
  Textbox.val(Content);
};

recognition.onerror = function (event) {
  if (event.error == "no-speech") {
    instructions.text("Try again.");
  }
};

$("#tel-btn").on("click", function (e) {
  if (Content.length) {
    Content += " ";
  }
  recognition.start();
});

Textbox.on("telinput", function () {
  Content = $(this).val();
});
