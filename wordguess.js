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
    word : "bottle",
    hint : "... (French translation:Bouteille)"
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
const startNewGameButton = document.querySelector(".btnStart");
const confirmWordButton = document.querySelector(".btnConfirm");
// const changeBgColorButton = document.querySelector(".btnBgColor");
// const changeBdColorButton = document.querySelector(".btnBdColor");
const messageDisplay = document.querySelector(".message");
const input = document.querySelector("input");
const timeLeftElement = document.querySelector(".time span");
const guesses1Left = document.querySelector(".p1guess span");
const guesses2Left = document.querySelector(".p2guess span");
// alert(player1Turn);

// Variables for game state
let player1Scoreboard = 0;
let player2Scoreboard  = 0;
let winningScore = 10;
let word = "";
let stopwatch; 
let p1guess = 3;
let p2guess = 3;
let time = 20; 
let turn = 1;
// let player1Turn = true;

    function startGame(){
    
    let randomSelect = Math.floor(Math.random() * words.length);
    let randomObject = words [randomSelect];
    word = randomObject.word.toLowerCase();
    console.log(randomObject);

    let wordArray = word.split("").sort(() => Math.random() - 0.5);
    let confuseWord = wordArray.join("");
    // return confuseWord
    
    
    // if(confuseWord === word)
    // return startGame();
    clearInterval(stopwatch)
    p1guess = 3;
    p2guess = 3;
    time = 20;
    guesses1Left.innerText = p1guess;
    guesses2Left.innerText = p2guess;
    score1Element.innerText = player1Scoreboard;
    score2Element.innerText = player2Scoreboard;
    wordElement.innerText = confuseWord;
    hintElement.innerText = randomObject.hint;
    timeLeftElement.innerText = time;
    input.value = "";
    confirmWordButton.setAttribute("disabled", true);

    stopwatch = setInterval(() => {
        if(time > 0){
            confirmWordButton.removeAttribute("disabled", true);
            time--;
            timeLeftElement.innerText = time;
            console.log(time)
        } else{
            alert(`Sorry, your time is over. The correct word was: ${word.toUpperCase()}`);
            clearInterval(stopwatch)
            confirmWordButton.setAttribute("disabled", true);
            if(turn === 1){
                turn = 2
                messageDisplay.textContent = "Player 2 Turn"
            }else if(turn === 2){
                turn = 1
                messageDisplay.textContent = "Player 1 Turn"
            }
            startGame()
        } 
        
    }, 1000);

    confirmWord = () => {
        let userWord = input.value.toLowerCase();
        if(!userWord) {
            return alert ('Please, enter a word to confirm');
        }
        if(userWord === word){
            alert(`Congratulations! ${userWord.toUpperCase()} is correct`)
            if(turn === 1){
            player1Scoreboard++;
            score1Element.innerText = player1Scoreboard;
            }else if(turn === 2){
                player2Scoreboard++;
                score2Element.innerText = player2Scoreboard;
                }
            changeTurns()
        } else{
            if(turn === 1){
                p1guess -= 1
                alert(`Nice guess. Try again! You have ${p1guess} left`)
                guesses1Left.innerText = p1guess;
                if(p1guess === 0){
                clearInterval(stopwatch)
                if(turn === 1){
                    turn = 2
                    messageDisplay.textContent = "Player 2 Turn"
                }else if(turn === 2){
                    turn = 1
                    messageDisplay.textContent = "Player 1 Turn"
                }
                startGame()
                }
            }else if(turn === 2){
                p2guess -= 1
                alert(`Nice guess. Try again! You have ${p2guess} left`)
                guesses2Left.innerText = p2guess;
                if(p2guess === 0){
                clearInterval(stopwatch)
                if(turn === 1){
                    turn = 2
                    messageDisplay.textContent = "Player 2 Turn"
                }else if(turn === 2){
                    turn = 1
                    messageDisplay.textContent = "Player 1 Turn"
                }
                startGame()
                }
            }
                
            
            
        }        document.querySelector(".input").value = ""


    }

}
startGame()

const changeTurns = () =>{
    if(turn === 1){
        turn = 2
        messageDisplay.textContent = "Player 2 Turn"
    }else if(turn === 2){
        turn = 1
        messageDisplay.textContent = "Player 1 Turn"
    }
    startGame()
}
startNewGameButton.addEventListener('click', ()=>{
    window.location.reload()
})

document.addEventListener('keydown', (press) =>{
    if(press.key==="Enter"){
        confirmWord()
    }
})