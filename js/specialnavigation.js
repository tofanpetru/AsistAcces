
$("#quick-menu").keypress(function(event) {
    if (event.keyCode == 97 || event.keyCode == 49) {
        console.log("49");
        location.replace("http://127.0.0.1:5501/AsistAcces/domains.html");
    }else if (event.keyCode == 100 || event.keyCode == 52) {
        console.log("52");
        location.replace("http://127.0.0.1:5501/AsistAcces/contact.html");
   }else if (event.keyCode == 53) {
        history.back();
    }
})
