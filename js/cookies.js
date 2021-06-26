function setCookie(params) {
    var name            = params.name,
        value           = params.value,
        expireDays      = params.days,
        expireHours     = params.hours,
        expireMinutes   = params.minutes,
        expireSeconds   = params.seconds;

    var expireDate = new Date();
    if (expireDays) {
        expireDate.setDate(expireDate.getDate() + expireDays);
    }
    if (expireHours) {
        expireDate.setHours(expireDate.getHours() + expireHours);
    }
    if (expireMinutes) {
        expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
    }
    if (expireSeconds) {
        expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
    }

    document.cookie = name +"="+ escape(value) +
        ";domain="+ window.location.hostname +
        ";path=/"+
        ";expires="+expireDate.toUTCString();
}

function deleteCookie(name) {
    setCookie({name: name, value: "", seconds: 1});
}