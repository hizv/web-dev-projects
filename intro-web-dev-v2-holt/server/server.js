const express = require("express");
const path = require("path");

const complements = [
  "You look nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
  "You look terrible today",
  "That dress makes you look fat",
  "Have you been working out? Apparently not",
  "You neanderthal",
  "You've never finished any online course, have you?",
  "You wrote Hello world in GolfScript? Even a child could do that.",
  "I'm sure your parents are really disappointed in you.",
  "You're such a barmy minger",
  "You've learned nothing at all in your entire life, and that's pretty hard to do"
];


function getRandomElem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/complement', function(req, res) {
  res.
    json({
      complement: getRandomElem(complements)
    })
    .end();
});

app.get('/insult', function(req, res) {
  res.
    json({
      insult: getRandomElem(insults)
    })
    .end();
});


app.use("/public", express.static("./public"));
app.listen(3000)
console.log("Listening on http://localhost:3000")
