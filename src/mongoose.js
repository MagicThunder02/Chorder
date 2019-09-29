//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const fs = require('fs');

const url = "mongodb+srv://ChorderUser:pizzamafiamandolino@chorderdb-tqltg.mongodb.net/Chorder?retryWrites=true&w=majority";

/* MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("Chorder");
   var myobj = { chordname: "Mi", chordtype: "major" };
   dbo.collection("chords").insertOne(myobj, function(err, res) {
     if (err) throw err;
     console.log("1 document inserted");
   });
   
 });
 */

mongoose.connect(url, { useNewUrlParser: true }).then(
  () => { console.log('ok, fatto') },
  (err) => { console.log('merda, non fatto') }
)

var ChordSchema = mongoose.Schema({
  chordname: String,
  chordtype: String,
  data: Buffer,
});

var NewChord = mongoose.model('NewChord', ChordSchema, 'chorder');



let img = fs.readFileSync('src/view/upload/image.png');

var chord = new NewChord({ chordname: 'Do', chordtype: 'major', data: img});

chord.save(function (err, n) {
  if (err) return console.error(err);
  console.log(n.chordname + " saved to chord collection.");
});

function findtab(name, res) {
 
  NewChord.find({ chordname: name }, function (err, doc) {

    res.writeHead(200, {'Content-Type': 'json'});
    res.end(doc[0].data);
  });  
}

module.exports.findtab = findtab;