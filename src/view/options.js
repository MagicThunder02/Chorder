window.onload = function () {
  
    let notation = readCookie('notation');

    console.log(notation);

    switch (notation) {
        case 'american':
            document.getElementById("notationAmerican").checked = true;
            break;
        case 'european':
            document.getElementById("notationEuropean").checked = true;
            break;
        default:
            document.getElementById("notationEuropean").checked = true;
            break;
    }

}

function writeCookie(cookieName, cookieValue) {
    let expire = new Date();
    let now = new Date();
    let cookieDuration = 30;
    expire.setTime(now.getTime() + (parseInt(cookieDuration) * 60000));
    document.cookie = cookieName + '=' + escape(cookieValue) + '; expires=' + expire.toGMTString() + '; path=/';
}

function readCookie(cookieName) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(cookieName + "=");
        if (start != -1) {
            start = start + cookieName.length + 1;
            var end = document.cookie.indexOf(";", start);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(start, end));
        } else {
            return "";
        }
    }
    return "";
}
