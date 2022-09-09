const words = [
    {
    word = "location",
    hint = "Position of someone or something (French translation: Localisation)"
},
{
    word ="school",
    hint = "... (French translation:...)"
},
{
    word = "alumni",
    hint = "... (French translation:...)"
},
{
    word = "restaurant",
    hint = "... (French translation:...)"
},
{
    word = "hospital",
    hint = "... (French translation:...)"
},
{
    word = "garden",
    hint = "... (French translation:...)"
},
{
    word = "thanks",
    hint = "... (French translation:...)"
},
{
    word = "morning",
    hint = "... (French translation:...)"
},
{
    word = "afternoon",
    hint = "... (French translation:...)"
},
{
    word = "teacher",
    hint = "... (French translation:...)"
},
{
    word = "classmate",
    hint = "... (French translation:...)"
},
{
    word = "circumstance",
    hint = "... (French translation:...)"
},
{
    word = "average",
    hint = "... (French translation:...)"
},
{
    word = "software",
    hint = "... (French translation:...)"
},
{
    word = "engineer",
    hint = "... (French translation:...)"
},
{
    word = "wedding",
    hint = "... (French translation: Mariage)"
},
{
    word = "employment",
    hint = "... (French translation: Emploi)"
},
{
    word = "interview",
    hint = "... (French translation: Entrevue)"
},
{
    word = "employer",
    hint = "... (French translation: patron)"
},
{
    word = "employee",
    hint = "... (French translation: Employé)"
},
{
    word = "brother",
    hint = "... (French translation: Frère)"
},
{
    word = "beautiful",
    hint = "... (French translation: Belle)"
},
{
    word = "computer",
    hint = "... (French translation: Ordinateur)"
},
{
    word = "library",
    hint = "... (French translation: Bibliothèque)"
},
{
    word = "fortunate",
    hint = "... (French translation: Riche)"
},
{
    word = "happy",
    hint = "... (French translation: Content)"
},
{
    word = "notebook",
    hint = "... (French translation: Cahier)"
},
{
    word = "homework",
    hint = "... (French translation: devoir de maison)"
},
{
    word = "knowledge",
    hint = "... (French translation: Connaissance)"
},
{
    word = "",
    hint = "... (French translation:...)"
},
{
    word = "husband",
    hint = "... (French translation: Mari, époux)"
},
{
    word = "bedroom",
    hint = "... (French translation: Chambre à coucher)"
},
{
    word = "sneaker",
    hint = "... (French translation: Tennis)"
},
{
    word = "party",
    hint = "... (French translation: Fête)"
},
{
    word = "delivery",
    hint = "... (French translation: Livraison)"
},
{
    word = "network",
    hint = "... (French translation: Réseau)"
},
{
    word = "congratulations",
    hint = "... (French translation: Félicitations)"
},
{
    word:"greetings",
    hint = "... (French translation: Salutations)"
}
]
// Variables for game state
let player1Score = 0;
let player2Score = 0;
let word = '';
let p1guess = 2;
let p2guess = 2;
let timer = 30;
let player1Turn = true

// Variables to store
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const wordElement = document.querySelector(".word");
const hintElement = document.querySelector(".hint span");
const startTheGame = document.getElementById("btnStart");
const confirmWord= document.getElementById("btnConfirm");
const changeBgColor = document.getElementById("btnBgColor");
const changeBdColor = document.getElementById("btnBdColor");
const messageDisplay = document.getElementById("message");
const input = document.querySelector("input");
const timerElement = document.querySelector(".timer span b");
const p1guessLeft = document.querySelector(".p1guess");
const p2guessLeft = document.querySelector(".p2guess");
// alert(player1Turn);

function setGame(){
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomObject = words [randomIndex];
    word = randomObject.word.toLocaleLowerCase();
    console.log(randomObject)

    let wordArray = word.split("").sort(() => Math.random() - 0.5);
    let confuseWord = wordArray.join
    console.log(confuseWord)
}