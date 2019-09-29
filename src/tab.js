
class Guitar {
    constructor(MiString, LaString, ReString, SolString, SiString, MiLastString) {
        this.guitarStrings = [MiString, LaString, ReString, SolString, SiString, MiLastString];
    }
}

stringArray = ['Do', 'Reb', 'Re', 'Mib', 'Mi', 'Fa', 'Solb', 'Sol', 'Lab', 'La', 'Sib', 'Si'];

function createString(name, fretnumber, stringArray) {
    let instrument_string = [];
    let start = stringArray.indexOf(name);
    

    for (i = 0; i < fretnumber; i++) {
        //riempio l'array di output con ogni nota
        instrument_string.push(stringArray[(start + i) % 12]);
    }

    // console.log(instrument_string);
    return instrument_string;
}

function createGuitar(frets) {
    let MiString     = createString('Mi', frets, stringArray);
    let LaString     = createString('La', frets, stringArray);
    let ReString     = createString('Re', frets, stringArray);
    let SolString    = createString('Sol', frets, stringArray);
    let SiString     = createString('Si', frets, stringArray);
    let MiLastString = createString('Mi', frets, stringArray);

    let guitar = new Guitar(MiString, LaString, ReString, SolString, SiString, MiLastString);

    return guitar;
}

/* function createBass(frets) {
    let MiString     = createString('Mi', frets, stringArray);
    let LaString     = createString('La', frets, stringArray);
    let ReString     = createString('Re', frets, stringArray);
    let SolString    = createString('Sol', frets, stringArray);

    let bass = new Guitar(MiString, LaString, ReString, SolString, SiString, MiLastString);

    return guitar;
} */

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}


function findNotes(notes, instrument) {
    let found = [];
    
    guitar.guitarStrings.forEach(oneString => {

        let foundOnString = [];

        notes.forEach(note => {
            let placeholder =  note + ':';
            foundOnString.push(placeholder);

            let indexes = getAllIndexes(oneString, note);
            foundOnString.push(indexes);
            
        });

        found.push(foundOnString);
    })
   
    
    return found;
}

guitar = createGuitar(20);
console.log(guitar);

result = findNotes(['Do', 'Mi', 'Sol'], guitar);

console.log(result);
