const words = [
    {
    word : "location",
    hint : "Position of someone or something (French translation: Position)"
},
{
    word : "school",
    hint : "... (French translation:...)"
},
{
    word : "alumni",
    hint : "... (French translation:...)"
},
{
    word : "restaurant",
    hint : "... (French translation:...)"
},
{
    word : "hospital",
    hint : "... (French translation:...)"
},
{
    word : "garden",
    hint : "... (French translation:...)"
},
{
    word : "thanks",
    hint : "... (French translation:...)"
},
{
    word : "morning",
    hint : "... (French translation:...)"
},
{
    word : "afternoon",
    hint : "... (French translation:...)"
},
{
    word : "teacher",
    hint : "... (French translation:...)"
},
{
    word : "classmate",
    hint : "... (French translation:...)"
},
{
    word : "circumstance",
    hint : "... (French translation:...)"
},
{
    word : "average",
    hint : "... (French translation:...)"
},
{
    word : "software",
    hint : "... (French translation:...)"
},
{
    word : "engineer",
    hint : "... (French translation:...)"
},
{
    word : "wedding",
    hint : "... (French translation: Mariage)"
},
{
    word : "employment",
    hint : "... (French translation: Emploi)"
},
{
    word : "interview",
    hint : "... (French translation: Entrevue)"
},
{
    word : "employer",
    hint : "... (French translation: patron)"
},
{
    word : "employee",
    hint : "... (French translation: Employé)"
},
{
    word : "brother",
    hint : "... (French translation: Frère)"
},
{
    word : "beautiful",
    hint : "... (French translation: Belle)"
},
{
    word : "computer",
    hint : "... (French translation: Ordinateur)"
},
{
    word : "library",
    hint : "... (French translation: Bibliothèque)"
},
{
    word : "fortunate",
    hint : "... (French translation: Riche)"
},
{
    word : "happy",
    hint : "... (French translation: Content)"
},
{
    word : "notebook",
    hint : "... (French translation: Cahier)"
},
{
    word : "homework",
    hint : "... (French translation: devoir de maison)"
},
{
    word : "knowledge",
    hint : "... (French translation: Connaissance)"
},
{
    word : "",
    hint : "... (French translation:...)"
},
{
    word : "husband",
    hint : "... (French translation: Mari, époux)"
},
{
    word : "bedroom",
    hint : "... (French translation: Chambre à coucher)"
},
{
    word : "sneaker",
    hint : "... (French translation: Tennis)"
},
{
    word : "party",
    hint : "... (French translation: Fête)"
},
{
    word : "delivery",
    hint : "... (French translation: Livraison)"
},
{
    word : "network",
    hint : "... (French translation: Réseau)"
},
{
    word : "congratulations",
    hint : "... (French translation: Félicitations)"
},
{
    word :"greetings",
    hint : "... (French translation: Salutations)"
}
];


// Variables to store
const score1Element = document.querySelector(".player1Scoreboard span");
const score2Element = document.querySelector(".player2Scoreboard span");
const wordElement = document.querySelector(".word");
const hintElement = document.querySelector(".hint span");
const startTheGameButton = document.querySelector(".btnStart");
const confirmWordButton = document.querySelector(".btnConfirm");
const changeBgColorButton = document.querySelector(".btnBgColor");
const changeBdColorButton = document.querySelector(".btnBdColor");
const messageDisplay = document.querySelector(".message");
const input = document.querySelector("input");
const timeLeftElement = document.querySelector(".time span");
const guesses1Left = document.querySelector(".p1guess span");
const guesses2Left = document.querySelector(".p2guess span");
// alert(player1Turn);

// Variables for game state
let player1Scoreboard = 0;
let player2Scoreboard  = 0;
let word = "";
let stopwatch; 
let p1guess = 3;
let p2guess = 3;
let time = 20; 
// let player1Turn = true;

function startGame(){
  
    let randomWord = words[Math.floor(Math.random() * words.length)];
    word = randomWord.word.toLowerCase();
    hint = randomWord.hint;
    console.log(word, hint);

    let wordArray = word.split("").sort(() => Math.random() - 0.5);
    let confuseWord = wordArray.join("");
    // return confuseWord
    
    
    if(confuseWord === word)
    return startGame();
    
    guesses1Left.innerText = p1guess;
    guesses2Left.innerText = p2guess;
    score1Element.innerText = player1Scoreboard;
    score2Element.innerText = player2Scoreboard;
    wordElement.innerText = confuseWord;
    hintElement.innerText = randomObject.hint;
    timeLeftElement.innerText = time;
    input.value = "";
    btnConfirm.setAttribute("disabled", true);
}

startGame()