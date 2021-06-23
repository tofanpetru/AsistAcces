// IIFE function. 
(function() {
    "use strict"; 
  
    if (typeof speechSynthesis === 'undefined')
      return;
  
    var myPhrase = 'Sistemul audio a fost activat!';
    var voices = [];
    
    var ready = function(callback) { 
      var d = document, s = d.readyState;
  
      // DOMContentLoaded was fired
      if (s == "complete" || s == "loaded" || s == "interactive") {
        callback();
      } else {
        if (d.addEventListener) {
          d.addEventListener("DOMContentLoaded", callback, false);
        } else {
          d.attachEvent("onDOMContentLoaded", callback);
        }
      }
    };
  
    function handler() {
      var utterThis = new SpeechSynthesisUtterance(myPhrase);
      var selectedOption = "ro-RO"
  
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      if (document.body.className.match("text_speech_on")) {
          speechSynthesis.speak(utterThis);
      }
    };
  
    function getSelectionText() {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
      }
      return text;
    }
  
    // This is the on mouse up event 
    document.onmouseup = function(e) {
      setTimeout(function() {
        speechSynthesis.cancel();
        myPhrase = getSelectionText();
        handler();
      }, 1);
    };
    function start() {
      if (speechSynthesis.onvoiceschanged !== undefined)
        speechSynthesis.onvoiceschanged = "ro-RO";
  
      setTimeout(handler, 75);
    }
  
    ready(start);
  })();
