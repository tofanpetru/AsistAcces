var voices = window.speechSynthesis.getVoices();

var sayit = function ()
{
    var msg = new SpeechSynthesisUtterance();

    msg.voice = voices[10]; // Note: some voices don't support altering params
    msg.lang = 'ro-RO';

    return msg;
}


var speekResponse = function (text)
{
    speechSynthesis.cancel(); // if it errors, this clears out the error.

    var sentences = text.split(".");
    for (var i=0;i< sentences.length;i++)
    {
        var toSay = sayit();
        toSay.text = sentences[i];
        speechSynthesis.speak(toSay);
    }
}