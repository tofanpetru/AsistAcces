function helper_generalDisabilitySet(classStr)
{
    $('body').toggleClass(classStr);
}
function helper_SelectToAudio()
{
    var textSpeechOn = "text_speech_on";
    if (!document.body.className.match(textSpeechOn)) {
        $('body').addClass(textSpeechOn);
        document.getElementById('sound-helper').textContent = "volume_off";
    } else{
        $('body').toggleClass(textSpeechOn);
        document.getElementById('sound-helper').textContent = "volume_up";
    }
}
function helper_DisabilitySet(clicked_id, disabilityClass, disabilityImgOn, disabilityImgOff)
{
    if (!document.body.className.match(disabilityClass)) {
        $('body').addClass(disabilityClass);
        document.getElementById(clicked_id).textContent = disabilityImgOff;
        M.toast({html: 'S-a activat modul: ' + disabilityImgOn})
    } else{
        $('body').toggleClass(disabilityClass);
        document.getElementById(clicked_id).textContent = disabilityImgOn;
        M.toast({html: 'S-a dezactivat modul: ' + disabilityImgOn})
    }
}
function helper_highlightStr(classStr)
{
    if (document.querySelector(".highlight_text") == null) {
        $("a").addClass(classStr);
        $("input[type='submit']").addClass(classStr);
        $('.tooltipped').tooltip();
    } else{
        var allTagsContain = document.getElementsByClassName(classStr);
        while (allTagsContain.length)
            allTagsContain[0].classList.remove(classStr);
        $('.tooltipped').tooltip("destroy");
    }
}

function removeDisSets()
{
    removeAllClassesWhoContain("highlight_text");
    removeAllClassesWhoContain("day_state");
    document.getElementById("day_state").textContent = "blur_circular";
    removeAllClassesWhoContain("invert_mode_on");
    document.getElementById("invert_colors").textContent = "invert_colors";

    document.getElementById("sound-helper").textContent = "volume_up";
    setDefaultSize();  
    M.toast({html: 'Resetat cu succes!'})
}
function removeAllClassesWhoContain(className) {
    var name = document.getElementsByClassName(className);
    while (name.length)
        name[0].classList.remove(className);
}

function increseFontSize()
{
    var actualFontSize = parseInt($("#html").css('font-size'));
    
    if ((actualFontSize >= 12 || actualFontSize >= 10) && actualFontSize <= 22) {
        actualFontSize = actualFontSize+2;
    }
    document.getElementById('html').style.fontSize = actualFontSize+ "px";
}
function decreseFontSize()
{
    var actualFontSize = parseInt($("#html").css('font-size'));
    
    if ((actualFontSize >= 12) && actualFontSize <= 24) {
        actualFontSize = actualFontSize-2;
    }
    document.getElementById('html').style.fontSize = actualFontSize+ "px";
}
function setDefaultSize()
{
    $('html').css("font-size", 16);
}

function textToSpeech(text) {
    var synthesis = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance();

    utterance.text = text;
    synthesis.speak(utterance);
}