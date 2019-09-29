const express = require ('express')
const bodyParser = require("body-parser");
const chorder = require ('./chorder.js');
const path = require ('path');
const mongoose = require ('./mongoose.js');


/* const mongoose = require('mongoose');
const fs = require('fs');
const url = "mongodb+srv://ChorderUser:pizzamafiamandolino@chorderdb-tqltg.mongodb.net/Chorder?retryWrites=true&w=majority";

 */
const PORT = 16180;
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'view')));

app.use(bodyParser.urlencoded({ extended: false }));

//gestione routes
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post('/getchord', (req,res)=>{
    console.log(req.body);
    var notes = '';
    if (req.body.selectKey != "" && req.body.selectKey != null) {notes += req.body.selectKey}
    if (req.body.selectthirdseventh != "" && req.body.selectthirdseventh != null) {notes += req.body.selectthirdseventh}
    if (req.body.selectX != "" && req.body.selectX != null) {notes += req.body.selectX}
    if (req.body.selectfifth != "" && req.body.selectfifth != null) {notes += req.body.selectfifth}
    if (req.body.selectnineth != "" && req.body.selectnineth != null) {notes += req.body.selectnineth}
    if (req.body.selecteleventh != "" && req.body.selecteleventh != null) {notes += req.body.selecteleventh}
    if (req.body.selectthirteenth != "" && req.body.selectthirteenth != null) {notes += req.body.selectthirteenth}


    const chordNotes = chorder.noteFinder(req.body.selectKey, notes);
    return res.status(200).set({'Access-Control-Allow-Headers': 'Content-type, text/html'}).send(chordNotes);
})

app.post('/getnotes', (req,res)=>{
    console.log(req.body);
    const notes = [];
    if (req.body.selectNote1 != "" && req.body.selectNote1 != null) {notes.push(req.body.selectNote1)}
    if (req.body.selectNote2 != "" && req.body.selectNote2 != null) {notes.push(req.body.selectNote2)}
    if (req.body.selectNote3 != "" && req.body.selectNote3 != null) {notes.push(req.body.selectNote3)}
    if (req.body.selectNote4 != "" && req.body.selectNote4 != null) {notes.push(req.body.selectNote4)}
    if (req.body.selectNote5 != "" && req.body.selectNote5 != null) {notes.push(req.body.selectNote5)}
    if (req.body.selectNote6 != "" && req.body.selectNote6 != null) {notes.push(req.body.selectNote6)}
    if (req.body.selectNote7 != "" && req.body.selectNote7 != null) {notes.push(req.body.selectNote7)}

    const chord = chorder.chordFinder(req.body.selectKey, notes);
    return res.status(200).set({'Access-Control-Allow-Headers': 'Content-type, text/html'}).send(chord);
})

app.get('/profile/image', function(req, res){

    // const img = fs.readFileSync('src/view/upload/image.png');

    let img = mongoose.findtab('Do', res); 
    // console.log('i: ', img);
    // res.writeHead(200, {'Content-Type': 'image/png'});
    // res.end(img, 'binary');
})



app.listen(PORT, ()=>{
    console.log("app in ascolto")
})
/*app.get('/pag1/:id', (req,res)=>{
    //res.sendFile(__dirname + "/view/test.html");
    res.send('L\'id è:' + req.params.id)
})*/





