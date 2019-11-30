window.onload = function () {

    let notation = readCookie('notation');
    console.log(notation);

    switch (notation) {
        case 'american':
            populate(notation);
            break;

        case 'european':
            populate(notation);
            break;

        default:
            populate(notation);
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
function populateSelect(id, notation) {

    console.log(id);
    let select = document.getElementById(id);
    console.log(select);

    let notes = [
        { note: 'Do',   european: 'Do',             american: 'C' },
        { note: 'Reb',  european: 'Do#/Re&#9837',   american: 'C#/D&#9837' },
        { note: 'Re',   european: 'Re',             american: 'D' },
        { note: 'Mib',  european: 'Re#/Mi&#9837',   american: 'D#/E&#9837' },
        { note: 'Mi',   european: 'Mi',             american: 'E' },
        { note: 'Fa',   european: 'Fa',             american: 'F' },
        { note: 'Solb', european: 'Fa#/Sol&#9837',  american: 'F#/G&#9837' },
        { note: 'Sol',  european: 'Sol',            american: 'G' },
        { note: 'Lab',  european: 'Sol/La&#9837',   american: 'G#/A&#9837' },
        { note: 'La',   european: 'La',             american: 'A' },
        { note: 'Sib',  european: 'La#/Si&#9837',   american: 'A#/B&#9837' },
        { note: 'Si',   european: 'Si',             american: 'B' }]

    switch (notation) {
        case 'american':
            notes.forEach(n => {
                let opt = document.createElement('option');
                opt.value = n.note;
                opt.innerHTML = n.american;
                select.appendChild(opt);
                console.log(opt)
            })
            break;

        case 'european':
            notes.forEach(n => {
                let opt = document.createElement('option');
                opt.value = n.note;
                opt.innerHTML = n.european;
                select.appendChild(opt);
            })
            break;
    }
}

function populate(notation) {
    populateSelect("selectNote1", notation);
    populateSelect("selectNote2", notation);
    populateSelect("selectNote3", notation);
    populateSelect("selectNote4", notation);
    populateSelect("selectNote5", notation);
    populateSelect("selectNote6", notation);
    populateSelect("selectNote7", notation);

}