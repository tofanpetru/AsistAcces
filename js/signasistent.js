$(document).on("click", ".close-asistent", function(){
    $(".tap-target").tapTarget("close");
});

function signAsistentAddHelper() {
    var els = document.querySelectorAll("p, h5, h1, a, span");
    for(var i = 0, all = els.length; i < all; i++){   
         els[i].classList.add('signly-text-segment', 'play');
     }
}
function signAsistentRemoveHelper() {
    var els = document.querySelectorAll("p, h5, h1, a, span");
    for(var i = 0, all = els.length; i < all; i++){   
         els[i].classList.remove('signly-text-segment', 'play');
     }
}
function signAsistentHelper()
{
    if (!document.body.classList.contains("web_asset_on")) {
        document.body.classList.add("web_asset_on");
        signAsistentAddHelper();
        document.getElementById('web_asset').textContent = "web_asset_off";
    } else{
        document.body.classList.remove("web_asset_on");
        signAsistentRemoveHelper();
        document.getElementById('web_asset').textContent = "web_asset";
    }
}