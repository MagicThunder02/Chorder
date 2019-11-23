class Note {
    constructor(name, string, fret) {
        this.name = name;
        this.string = string;
        this.fret = fret;
    }
}

class Guitar {
    constructor(MiString, LaString, ReString, SolString, SiString, MiLastString, fretnumber) {

        this.myStrings = [];
        this.myStrings[0] = MiString;
        this.myStrings[1] = LaString;
        this.myStrings[2] = ReString;
        this.myStrings[3] = SolString;
        this.myStrings[4] = SiString;
        this.myStrings[5] = MiLastString;
        this.fretnumber = fretnumber;
    }
}

class Bass {
    constructor(MiString, LaString, ReString, SolString, fretnumber) {
        this.myStrings = [];
        this.myStrings[0] = MiString;
        this.myStrings[1] = LaString;
        this.myStrings[2] = ReString;
        this.myStrings[3] = SolString;
        this.fretnumber = fretnumber;
    }
}

notesArray = ['Do', 'Reb', 'Re', 'Mib', 'Mi', 'Fa', 'Solb', 'Sol', 'Lab', 'La', 'Sib', 'Si'];

function createString(name, number, fretnumber) {
    let instrument_string = [];
    let start = notesArray.indexOf(name);

    for (let i = 0; i < fretnumber; i++) {

        let namepar = notesArray[(start + i) % 12];
        let stringpar = number;
        let fretpar = i;
        let note = new Note(namepar, stringpar, fretpar);

        instrument_string.push(note);
    }

    return instrument_string;
}

function createGuitar(frets) {
    let MiString = createString('Mi', 0, frets);
    let LaString = createString('La', 1, frets);
    let ReString = createString('Re', 2, frets);
    let SolString = createString('Sol', 3, frets);
    let SiString = createString('Si', 4, frets);
    let MiLastString = createString('Mi', 5, frets);

    let guitar = new Guitar(MiString, LaString, ReString, SolString, SiString, MiLastString, frets);

    return guitar;
}

function createBass(frets) {
    let MiString = createString('Mi', 0, frets);
    let LaString = createString('La', 1, frets);
    let ReString = createString('Re', 2, frets);
    let SolString = createString('Sol', 3, frets);

    let bass = new Bass(MiString, LaString, ReString, SolString, frets);

    return bass;
}

//creo una finestra di 4 tasti 
function createWindow(start, instrument) {
    let window = [];

    instrument.myStrings.forEach(instrument_string => {
        let tmp = instrument_string.slice(start, start + 4);
        window.push(tmp);
    });

    // console.log('w:', window)
    return window;
}

//osservo se nella finestra ci sono le note che mi interessano
function observeWindow(notes, window) {
    let found = [];
    window.forEach(choppedString => {
        choppedString.forEach(note => {
            notes.forEach(givenNote => {
                if (givenNote.name == note.name) {
                    found.push(note);
                }
            });
        });
    });
    // console.log('w:', found)
    return found;
}

function preferVoid(instrument, windowsSet) {
    let returnWindowsSet = [];
    windowsSet.forEach(window => {
        //tra una corda a vuoto e un tasto scelgo la corda a vuoto
        for (let i = 0; i < window.length; i++) {
            for (let j = 0; j < instrument.myStrings.length; j++) {
                //se ci sono due note sulla stessa corda 

                if (i != j) {
                    if (window[i].string == window[j].string) {
                        //se uno è a vuoto rimuovi l'altro dalla finestra
                        if (window[i].fret == 0) {
                            window.splice(j, 1)
                        }
                    }
                }
            }
        }
        returnWindowsSet.push(window)
    });
    return returnWindowsSet;
}


function selectFundamentalAsLower(notes, windowsSet) {
    let tmp = [];
    let result = [];

    windowsSet.forEach(window => {
        //cerco la corda più bassa
        window.forEach(element => {
            tmp.push(element.string);
        })
        tmp = tmp.sort();
        let min = tmp[0];

        window.forEach(note => {
            //costringo la tonica cioè notes[0] a essere la nota più grave
            if (note.string == min) {
                if (note.name == notes[0].name) {
                    result.push(window)
                }
            }
        });
    });
    return result;
}

//scelgo la miglior configurazione di note
//ogni regola restituisce una nuova finestra
function chooseBest(instrument, notes, windowsSet) {
    let found = [];

    windowsSet = selectFundamentalAsLower(notes, windowsSet);
    windowsSet = preferVoid(instrument, windowsSet)

    found.push(windowsSet);

    console.log('f:', found)
    return found;
}


let frets = 15;
guitar = createGuitar(frets);
// bass = createBass(frets);

var n = [{ name: 'Do' }, { name: 'Mi' }, { name: 'Sol' }]
let windowsArray = [];

for (i = 0; i < frets - 4; i++) {
    let w = createWindow(i, guitar);
    let observedWindow = observeWindow(n, w);
    // console.log(observedWindow);
    windowsArray.push(observedWindow);
}
let result = chooseBest(guitar, n, windowsArray);

// console.log(result);
console.log('out:', JSON.stringify(result, null, ' '));
