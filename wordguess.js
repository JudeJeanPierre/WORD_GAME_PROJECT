const words = [
    {
        word: "location",
        hint: "Position of someone or something (French translation: Position)"
    },
    {
        word: "wonderful",
        hint: "Inspiring delight, pleasure, or admiration; extremely good; marvelous. (French translation: Merveilleux)"
    },
    {
        word: "Sibling",
        hint: "Offspring having one or both parents in common; a brother or sister. (French translation: Frère/Soeur)",
    },
    {
        word: "christian",
        hint: "Relating to or professing Christianity or its teachings. (French translation: Chrétien)"
    },
    {
        word: "available",
        hint: "Able to be used or obtained; at someone's disposal. (French translation: Disponible)"
    },
    {
        word: "church",
        hint: "A building used for public Christian worship. (French translation: Eglise)"
    },
    {
        word: "school",
        hint: "An institution for educating children. (French translation: Ecole)"
    },
    {
        word: "student",
        hint: "A person who is studying at a school or college. (French translation: Etudiant)"
    },
    {
        word: "cohort",
        hint: "A group of people banded together or treated as a group. (French translation: Promotion)"
    },
    {
        word: "hospital",
        hint: "An institution providing medical and surgical treatment and nursing care for sick or injured people. (French translation: Hopital)"
    },
    {
        word: "garden",
        hint: "A small piece of ground used to grow vegetables, fruit, herbs, or flowers. (French translation: Jardin)"
    },
    {
        word: "thanks",
        hint: "An expression of gratitude; another way of saying thank you. (French translation: Merci)"
    },
    {
        word: "morning",
        hint: "The period of time between midnight and noon, especially from sunrise to noon. (French translation: Matin)"
    },
    {
        word: "afternoon",
        hint: "The time from noon or lunchtime to evening. (French translation: Après-midi)",
    },
    {
        word: "teacher",
        hint: "A person who teaches, especially in a school. (French translation: Enseignant)"
    },
    {
        word: "classmate",
        hint: "A fellow member of a class at school or college. (French translation: Camarade de classe)"
    },
    {
        word: "circumstance",
        hint: "A fact or condition connected with or relevant to an event or action. (French translation: Circonstance)"
    },
    {
        word: "average",
        hint: "Median, or the mean, which is calculated by dividing the sum of the values in the set by their number. (French translation: Moyenne)"
    },
    {
        word: "software",
        hint: "A set of instructions, data or programs used to operate computers and execute specific tasks. (French translation: Logiciel)"
    },
    {
        word: "engineer",
        hint: "A person who designs, builds, or maintains engines, machines, or public works. (French translation: Ingénieur)"
    },
    {
        word: "wedding",
        hint: "A marriage ceremony, especially considered as including the associated celebrations. (French translation: Mariage)"
    },
    {
        word: "employment",
        hint: "The condition of having paid work; the action of giving work to someone. (French translation: Emploi)"
    },
    {
        word: "interview",
        hint: "A formal meeting in which one or more persons question, consult, or evaluate another person. (French translation: Entrevue)"
    },
    {
        word: "employer",
        hint: "One that employs or makes use of something or somebody. (French translation: patron)"
    },
    {
        word: "employee",
        hint: "Someone who gets paid to work for a person or company. (French translation: Employé, Salarié)"
    },
    {
        word: "brother",
        hint: "A man or boy in relation to other sons and daughters of his parents. (French translation: Frère)"
    },
    {
        word: "beautiful",
        hint: "Pleasing the senses or mind aesthetically; of a very high standard; excellent. (French translation: Belle)"
    },
    {
        word: "computer",
        hint: "An electronic device for storing and processing data. (French translation: Ordinateur)"
    },
    {
        word: "library",
        hint: "A building or room containing collections of books, periodicals... (French translation: Bibliothèque)"
    },
    {
        word: "fortunate",
        hint: "Favored by or involving good luck or fortune; lucky. (French translation: Riche)"
    },
    {
        word: "happy",
        hint: "Feeling or showing pleasure or contentment; fortunate and convenient. (French translation: Content)"
    },
    {
        word: "notebook",
        hint: "A small book with blank or ruled pages for writing notes in (French translation: Cahier)"
    },
    {
        word: "homework",
        hint: "Schoolwork that a student is required to do at home. (French translation: devoir de maison)"
    },
    {
        word: "knowledge",
        hint: "Facts, information, and skills acquired by a person through experience or education. (French translation: Connaissance)"
    },
    {
        word: "bottle",
        hint: "A container, typically made of glass or plastic, used for storing drinks or other liquids. (French translation:Bouteille)"
    },
    {
        word: "husband",
        hint: "A married man considered in relation to his spouse. (French translation: Mari, époux)"
    },
    {
        word: "bedroom",
        hint: "A room for sleeping in. (French translation: Chambre à coucher)"
    },
    {
        word: "sneaker",
        hint: "A soft shoe with a rubber sole worn for sports or casual occasions. (French translation: Tennis)"
    },
    {
        word: "party",
        hint: "A social gathering of invited guests, typically involving eating, drinking, and entertainment. (French translation: Fête)"
    },
    {
        word: "delivery",
        hint: "The action of delivering letters, packages, or ordered goods. (French translation: Livraison)"
    },
    {
        word: "network",
        hint: "A group or system of interconnected people or things (French translation: Réseau)"
    },
    {
        word: "congratulations",
        hint: "Expressions of pleasure and best wishes on the occasion of another's good fortune or success. (French translation: Félicitations)"
    },
    {
        word: "greetings",
        hint: "The action of giving a sign of welcome or recognition. (French translation: Salutations)"
    }
];
// Variables to store
const score1Element = document.querySelector(".player1Scoreboard span");
const score2Element = document.querySelector(".player2Scoreboard span");
const wordElement = document.querySelector(".word");
const hintElement = document.querySelector(".hint span");
const startNewGameButton = document.querySelector(".btnStart");
const confirmWordButton = document.querySelector(".btnConfirm");
const messageDisplay = document.querySelector(".message");
const input = document.querySelector("input");
const timeLeftElement = document.querySelector(".time span");
const guesses1Left = document.querySelector(".p1guess span");
const guesses2Left = document.querySelector(".p2guess span");
const applause = document.getElementById("applause");
const ooh = document.getElementById("ooh");
const buzzer = document.getElementById("buzzer");
const wrong = document.getElementById("wrong");
const bell = document.getElementById("bell");
const win = document.getElementById("win");
const fanfare = document.getElementById("fanfare");
// Other variables
let player1Scoreboard = 0;
let player2Scoreboard  = 0;
let word = "";
let stopwatch; 
let p1guess = 3;
let p2guess = 3;
let time = 20; 
let turn = 1;
// GAME START
    alert('WELCOME TO JUDWORD GUESSING GAME');
    alert('Press ENTER or OK to start the game');
    function startGame(){
    let randomSelect = Math.floor(Math.random() * words.length);
    let randomObject = words [randomSelect];
    word = randomObject.word.toLowerCase();
    console.log(randomObject);
    let wordArray = word.split("").sort(() => Math.random() - 0.5);
    let confuseWord = wordArray.join("");
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
// Set stopwatch & Time left
    stopwatch = setInterval(() => {
        if(time > 0){
            confirmWordButton.removeAttribute("disabled", true);
            time--;
            timeLeftElement.innerText = time;
            console.log(time)
        } else{
            buzzer.play();
            ooh.play();
            alert(`Sorry, your time is up. GAME PASSED OVER. The correct word was: ${word.toUpperCase()}`);
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
// Confirm the user input WORD
    confirmWord = () => {
        let userWord = input.value.toLowerCase();
        if(!userWord) {
            wrong.play()
            alert ('Please, enter a word to confirm');
        }
        if(userWord === word){
            applause.play();
            alert(`Congratulations! ${userWord.toUpperCase()} is correct`)
            bell.play();
            if(turn === 1){
            player1Scoreboard++;
            score1Element.innerText = player1Scoreboard;
            winGame()
            }else if(turn === 2){
                player2Scoreboard++;
                score2Element.innerText = player2Scoreboard;
                winGame()
                }
            changeTurns()
// Guesses left
        } else{
            if(turn === 1){
                p1guess -= 1
                alert(`Nice guess. Try again! You have ${p1guess} left`)
                guesses1Left.innerText = p1guess;
                if(p1guess === 0){
                buzzer.play();
                ooh.play;
                clearInterval(stopwatch)
                if(turn === 1){
                    bell.play()
                    turn = 2
                    messageDisplay.textContent = "Player 2 Turn"
                }else if(turn === 2){
                    bell.play()
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
                buzzer.play();
                ooh.play;
                clearInterval(stopwatch)
                if(turn === 1){
                    bell.play()
                    turn = 2
                    messageDisplay.textContent = "Player 2 Turn"
                }else if(turn === 2){
                    bell.play()
                    turn = 1
                    messageDisplay.textContent = "Player 1 Turn"
                }
                startGame()
                }
            }
        } document.querySelector(".input").value = ""
    }
}
startGame()
// Change turn
const changeTurns = () =>{
    if(turn === 1){
        bell.play()
        turn = 2
        
        messageDisplay.textContent = "Player 2 Turn"
    }else if(turn === 2){
        bell.play()
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
// Confirm the winner / winner function
function winGame(){
    if(player1Scoreboard === 10){
        win.play();
        alert(`Game is over! Player 1 is the WINNER. CONGRATULATIONS!!! Press OK to start a new game.`)
        fanfare.play()
        window.location.reload()
        }else if(player2Scoreboard === 10){
        win.play();
        alert(`Game is over! Player 2 is the WINNER. CONGRATULATIONS!!! Press OK to start a new game.`)
        fanfare.play()
        window.location.reload()
        }
}
// Change background
function changeBodyBg(color){
    document.body.style.background = color;
}
function changeBdColor(color){
document.querySelector('.gameContainer').style.backgroundColor = 'yellow';
}