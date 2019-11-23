class Note {
    //classe della nota
    constructor(nat, alt) {
        this.nat = nat;
        this.alt = alt;
    }
}

class Grade {
    //classe grado (numero della nota nella scala)
    constructor(num, alt) {
        this.num = num;
        this.alt = alt;
    }
}

class Chord {
    //classe accordo
    fundamental = '';
    third = '';
    fifth = '';
    seventh = '';
    nineth = '';
    eleventh = '';
    thirteenth = '';

    constructor(arrayGrades) {
        console.log('constr', arrayGrades);
        arrayGrades.forEach(element => {
            switch (element.num) {
                case 1: this.fundamental = element; break;
                case 3: this.third = element; break;
                case 5: this.fifth = element; break;
                case 7: this.seventh = element; break;
                case 2: this.nineth = element; break;
                case 4: this.eleventh = element; break;
                case 6: this.thirteenth = element; break;
            }
        });
    }
}
var notes = [
    //elenco dell note senza alterazioni
    { nat: 1, alt: 0 },
    { nat: 2, alt: 0 },
    { nat: 3, alt: 0 },
    { nat: 4, alt: 0 },
    { nat: 5, alt: 0 },
    { nat: 6, alt: 0 },
    { nat: 7, alt: 0 },
];

var sharps = [
    //array per l'ordine dei diesis
    { nat: 4, alt: 0 },
    { nat: 1, alt: 0 },
    { nat: 5, alt: 0 },
    { nat: 2, alt: 0 },
    { nat: 6, alt: 0 },
    { nat: 3, alt: 0 },
    { nat: 7, alt: 0 },
];

var flats = [
    //array per l'ordine dei bemolli
    { nat: 7, alt: 0 },
    { nat: 3, alt: 0 },
    { nat: 6, alt: 0 },
    { nat: 2, alt: 0 },
    { nat: 5, alt: 0 },
    { nat: 1, alt: 0 },
    { nat: 4, alt: 0 },
];

var circle5th = [
    //array del circolo delle quinte
    {
        note: { nat: 1, alt: 0 },
        sharps: 0,
        flats: 0,
    },
    {
        note: { nat: 5, alt: 0 },
        sharps: 1,
        flats: 0,
    },
    {
        note: { nat: 2, alt: 0 },
        sharps: 2,
        flats: 0,
    },
    {
        note: { nat: 6, alt: 0 },
        sharps: 3,
        flats: 0,
    },
    {
        note: { nat: 3, alt: 0 },
        sharps: 4,
        flats: 0,
    },
    {
        note: { nat: 7, alt: 0 },
        sharps: 5,
        flats: 0,
    },
    {
        note: { nat: 4, alt: 1 },
        sharps: 6,
        flats: 0,
    },
    {
        note: { nat: 5, alt: -1 },
        sharps: 0,
        flats: 6,
    },
    {
        note: { nat: 2, alt: -1 },
        sharps: 0,
        flats: 5,
    },
    {
        note: { nat: 6, alt: -1 },
        sharps: 0,
        flats: 4,
    },
    {
        note: { nat: 3, alt: -1 },
        sharps: 0,
        flats: 3,
    },
    {
        note: { nat: 7, alt: -1 },
        sharps: 0,
        flats: 2,
    },
    {
        note: { nat: 4, alt: 0 },
        sharps: 0,
        flats: 1,
    },
    //alias per le chiavi inesistenti
];

function encode(obj) {
    //dato un oggeto di tipo Note ritorna il nome della nota
    let name = ''

    switch (obj.nat) {
        case 1:
            name = 'Do';
            switch (obj.alt) {
                case -1:
                    name += '\u266D' //flat symbol
                    break;
                case 1:
                    name += '#'
                    break;
            }
            break;

        case 2:
            name = 'Re';
            switch (obj.alt) {
                case -1:
                    name += '\u266D' //flat symbol
                    break;
                case 1:
                    name += '#'
                    break;
            }
            break;

        case 3:
            name = 'Mi';
            switch (obj.alt) {
                case -1:
                    name += '\u266D' //flat symbol
                    break;
                case 1:
                    name += '#'
                    break;
            }
            break;

        case 4:
            name = 'Fa';
            switch (obj.alt) {
                case -1:
                    name += '\u266D' //flat symbol
                    break;
                case 1:
                    name += '#'
                    break;
            }
            break;

        case 5:
            name = 'Sol';
            switch (obj.alt) {
                case -1:
                    name += '\u266D' //flat symbol
                    break;
                case 1:
                    name += '#'
                    break;
            }
            break;

        case 6:
            name = 'La';
            switch (obj.alt) {
                case -1:
                    name += '\u266D' //flat symbol
                    break;
                case 1:
                    name += '#'
                    break;
            }
            break;

        case 7:
            name = 'Si';
            switch (obj.alt) {
                case -1:
                    name += '\u266D' //flat symbol
                    break;
                case 1:
                    name += '#'
                    break;
            }
            break;
    }
    return name;
}

function decode(name) {
    //dato il nome della nota ritorna un oggeto di tipo Note
    let txt = name;
    let note = new Note(0, 0)

    if (name.indexOf('b') > 0) {
        txt = name.substring(0, name.length - 1);
        note.alt = -1;
    }

    if (name.indexOf('#') > 0) {
        txt = name.substring(0, name.length - 1);
        note.alt = +1;
    }

    switch (txt.toUpperCase()) {
        case 'DO': note.nat = 1; break;
        case 'RE': note.nat = 2; break;
        case 'MI': note.nat = 3; break;
        case 'FA': note.nat = 4; break;
        case 'SOL': note.nat = 5; break;
        case 'LA': note.nat = 6; break;
        case 'SI': note.nat = 7; break;
    }

    return note;
}

function printScale(notes) {
    let txt = '';
    notes.forEach(element => {
        txt += (encode(element) + ' ');
    });
    console.log(txt);
}

function modScale(n) {
    //uso il modulo per fare il giro
    return n % notes.length
}

function findKey(root) {
    let found;
    circle5th.forEach(element => {
        if ((element.note.nat == root.nat) && (element.note.alt == root.alt)) {
            //console.log('e:', element);            
            found = Object.assign({}, element);
        }
    });
    return found;
}

function adjustScale(scale, fifth) {
    let output = [];

    //se la chiave necessita diesis
    if (fifth.sharps != 0) {
        scale.forEach(element => {
            for (i = 0; i < fifth.sharps; i++) {
                /* verifico che la nota nell'array dei diesis
                corrisponda a quella della scala senza alterazioni */
                if (element.nat == sharps[i].nat) {
                    element.alt = 1;
                }
            }
            output.push(element);
        });
    }
    //se la chiave necessita bemolli
    else if (fifth.flats != 0) {
        scale.forEach(element => {
            for (i = 0; i < fifth.flats; i++) {
                if (element.nat == flats[i].nat) {
                    element.alt = -1;
                }
            }
            output.push(element);
        });
    }
    //nel Do la scala non riceve alterazioni
    else {
        scale.forEach(element => {
            output.push(element);
        });
    }
    // console.log(JSON.stringify(output))
    return output;
}

function gradeFinder(scale, note) {
    //cerco la nota come è
    for (i = 0; i < scale.length - 1; i++) {
        if ((scale[i].nat == note.nat) && (scale[i].alt == note.alt)) {
            let grade = new Grade(i + 1, 0);
            return grade;
        }
    }
    //cerchiamo il match solo naturale
    for (i = 0; i < scale.length - 1; i++) {
        if (scale[i].nat == note.nat) {
            let grade = new Grade(i + 1, note.alt);
            return grade;
        }
    }
}

function createScale(key) {
    //creo prima la scala senza alterazioni
    let ind = key.nat;

    let scale = [];
    scale.push(key);

    for (i = 0; i < notes.length; i++) {
        //riempio l'array di output con ogni nota
        let n = new Note(modScale(key.nat + i) + 1, 0);
        scale.push(n);
    }

    //trovo la posizione della chiave nel circolo delle quinte (numero di # o b)
    let fifth = findKey(key);

    //aggiungo le alterazioni dove necessario
    let finalScale = adjustScale(scale, fifth);

    printScale(finalScale);
    return finalScale;

}

function findX(chord) {
    //gestisco il numero
    if (chord.thirteenth.alt == 0) {
        return '13';
    }

    if (chord.eleventh.alt == 0) {
        return '11';
    }

    if (chord.nineth.alt == 0) {
        return '9';
    }

    if (chord.seventh) {
        return '7';
    }

    return '';
}

function find5(chord) {
    if (chord.fifth.alt == 1 && chord.third.alt == 0) {
        return 'aum';
    }
    if (chord.fifth.alt == -1 && chord.third.alt == -1) {
        return 'dim';
    }
    if (chord.fifth.alt == -1) {
        return 'b5';
    }
    if (chord.fifth.alt == 1) {
        return '#5';
    }
    if (chord.fifth.alt == 0) {
        return '';
    }

    return '-error5-'
}

function chordNamer(scale, chord) {

    let name = '';
    if (!chord.fundamental) {
        return 'error: missing fundamental';
    }

    if (!chord.third) {
        return 'error: missing third';
    }

    if (!chord.fifth) {
        return 'error: missing fifth';
    }

    //gestisco la tonica, esempio: 'Do'
    name = encode(scale[chord.fundamental.num - 1]);

    //gestisco la quinta
    name += find5(chord);

    let skipmin = false;
    if (name.includes('dim')) { skipmin = true; }
    if (name.includes('aum')) { skipmin = true; }

    //gestisco la terza
    if (!skipmin) {
        if (chord.third.alt == -1) {
            name += 'min';
        }
    }
    //gestisco la settima
    if (chord.seventh.alt == 0) {
        name += 'maj';
    }

    name += findX(chord);

    //gestico la nona
    if (chord.nineth.alt == -1) {
        name += 'b9';
    }
    if (chord.nineth.alt == 1) {
        name += '#9';
    }

    //gestico la undicesima
    if (chord.eleventh.alt == -1) {
        name += 'b11';
    }
    if (chord.eleventh.alt == 1) {
        name += '#11';
    }

    //gestico la tredicesima
    if (chord.thirteenth.alt == -1) {
        name += 'b13';
    }
    if (chord.thirteenth.alt == 1) {
        name += '#13';
    }

    return name;
}

function chordFinder(key, notes) {
    //trova il grado di ogni nota e poi l'accordo
    let scale = createScale(decode(key));
    let arrayGrades = [];
    console.log('notes:', notes)
    notes.forEach(note => {
        arrayGrades.push(gradeFinder(scale, decode(note)));
    });

    chord = new Chord(arrayGrades);
    // console.log('c: ', chord.fundamental)

    let a = chordNamer(scale, chord);
    // console.log('a:', a)

    return a;
}

function noteFinder(key, chord) {
    //siccome l'array parte da 1 inserisco il numero giusto e sottraggo 1

    let scale = createScale(decode(key));
    let fundamental = '';
    let third = '';
    let fifth = '';
    let seventh = '';
    let nineth = '';
    let eleventh = '';
    let thirteenth = '';
    let printArray = [];

    //tonica
    if (chord.includes('Do')) { fundamental = 'Do' }
    if (chord.includes('Re')) { fundamental = 'Re' }
    if (chord.includes('Mi')) { fundamental = 'Mi' }
    if (chord.includes('Fa')) { fundamental = 'Fa' }
    if (chord.includes('Sol')) { fundamental = 'Sol' }
    if (chord.includes('La')) { fundamental = 'La' }
    if (chord.includes('Si')) { fundamental = 'Si' }
    if (chord.includes('Reb')) { fundamental = 'Reb' }
    if (chord.includes('Mib')) { fundamental = 'Mib' }
    if (chord.includes('Solb')) { fundamental = 'Solb' }
    if (chord.includes('LAb')) { fundamental = 'LAb' }
    if (chord.includes('Sib')) { tofundamental = 'Sib' }
    console.log('nn:', scale[3 - 1].nat)
    //terza

    if (chord.includes('min')) {
        switch (scale[3 - 1].alt) {
            case -1: third = scale[2 - 1];
                third.alt = 0; break;
            case 0: third = scale[3 - 1];
                third.alt = -1; break;
            case 1: third = scale[3 - 1];
                third.alt = 0; break;
        }
    }

    else {
        third = scale[3 - 1];
    }

    //quinta
    if (chord.includes('dim') || chord.includes('b5')) {
        switch (scale[5 - 1].alt) {
            case -1: fifth = scale[4 - 1]; break;
            case 0: fifth = scale[5 - 1];
                fifth.alt = -1; break;
            case 1: fifth = scale[5 - 1];
                fifth.alt = 0; break;
        }
        /* if (!chord.includes('min')) {
            switch (scale[3 - 1].alt) {
                case -1: third = scale[2 - 1]; break;
                case 0: third = scale[3 - 1];
                    third.alt = -1; break;
                case 1: third = scale[3 - 1];
                    third.alt = 0; break;
            }
        } */
        if (!chord.includes('min')) {
            third.alt = 0;
        }
    }
    else if (chord.includes('aum') || chord.includes('#5')) {
        switch (scale[5 - 1].alt) {
            case -1: fifth = scale[5 - 1];
                fifth.alt = 0; break;
            case 0: fifth = scale[5 - 1];
                fifth.alt = 1; break;
            case 1: fifth = scale[6 - 1]; break;
        }
    }
    else {
        fifth = scale[5 - 1];
    }

    //settima
    if (chord.includes('maj')) {
        switch (scale[7 - 1].alt) {
            case -1: seventh = scale[7 - 1];
                seventh.alt = 0; break;
            case 0: seventh = scale[7 - 1]; break;
            case 1: seventh = scale[7 - 1];
                seventh.alt = 0; break;
        }
    }

    else if (!chord.includes('maj')) {
        switch (scale[7 - 1].alt) {
            case -1: seventh = scale[6 - 1];
                seventh.alt = 0; break;
            case 0: seventh = scale[7 - 1];
                seventh.alt = -1; break;
            case 1: seventh = scale[7 - 1];
                seventh.alt = 0; break;
        }
    }
    
    else {
        seventh = scale[7 - 1];
    }

    //nona
    if (chord.includes('b9')) {
        switch (scale[2 - 1].alt) {
            case -1: nineth = scale[1 - 1];
                nineth.alt = 0; break;
            case 0: nineth = scale[2 - 1];
                nineth.alt = -1; break;
            case 1: nineth = scale[2 - 1];
                nineth.alt = 0; break;
        }
    }
    if (chord.includes('#9')) {
        switch (scale[2 - 1].alt) {
            case -1: nineth = scale[2 - 1];
                nineth.alt = 0; break;
            case 0: nineth = scale[2 - 1];
                nineth.alt = 1; break;
            case 1: nineth = scale[2 - 1]; break;
        }
    }
    if (chord.includes('9')) {
        nineth = scale[2 - 1];
    }

    //undicesima
    if (chord.includes('b11')) {
        switch (scale[4 - 1].alt) {
            case -1: eleventh = scale[3 - 1];
                eleventh.alt = 0; break;
            case 0: eleventh = scale[4 - 1];
                eleventh.alt = -1; break;
            case 1: eleventh = scale[4 - 1];
                eleventh.alt = 0; break;
        }
    }
    if (chord.includes('#11')) {
        switch (scale[4 - 1].alt) {
            case -1: eleventh = scale[4 - 1];
                eleventh.alt = 0; break;
            case 0: eleventh = scale[4 - 1];
                eleventh.alt = 1; break;
            case 1: eleventh = scale[4 - 1]; break;
        }
    }
    if (chord.includes('11')) {
        eleventh = scale[4 - 1];
    }

    //tredicesima
    if (chord.includes('b13')) {
        switch (scale[6 - 1].alt) {
            case -1: thirteenth = scale[5 - 1];
                thirteenth.alt = 0; break;
            case 0: thirteenth = scale[6 - 1];
                thirteenth.alt = -1; break;
            case 1: thirteenth = scale[6 - 1];
                thirteenth.alt = 0; break;
        }
    }
    if (chord.includes('#13')) {
        switch (scale[6 - 1].alt) {
            case -1: thirteenth = scale[6 - 1];
                thirteenth.alt = 0; break;
            case 0: thirteenth = scale[6 - 1];
                thirteenth.alt = 1; break;
            case 1: thirteenth = scale[6 - 1]; break;
        }
    }
    if (chord.includes('13')) {
        thirteenth = scale[6 - 1];
    }

    printArray.push(fundamental);
    printArray.push( ' ', encode(third), ' ', encode(fifth), ' ', encode(seventh), ' ', encode(nineth), ' ', encode(eleventh), ' ', encode(thirteenth));

    console.log('p: ', printArray, 'k:',nineth ,eleventh);

    return printArray
}

noteFinder('Do', 'Doaum');

module.exports.chordFinder = chordFinder;
module.exports.noteFinder = noteFinder;


