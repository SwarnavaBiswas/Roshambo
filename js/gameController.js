let currentStatus = -1;
let preStartTime = 1000;
let relaxationTime = 1000; // in milliseconds
let userScore = 0, computerScore = 0;
let lastUserChoice, lastComputerChoice;
let continueButton = document.getElementById('continueButton');
let winningPoint = 10;
let endscreen = document.getElementById('endscreen');
let playAgainButton = document.getElementById('playAgainButton');
let mainscreen = document.getElementsByClassName('mainscreen');
let startscreen = document.getElementById('startscreen');
let startButton = document.getElementById('startButton');

const starter = () => {
    startscreen.style.display = 'flex';
    for(let element of mainscreen){
        element.style.filter = 'blur(0.2em)';
    }
}
startButton.onclick = () => {
    startscreen.style.display = 'none';
    for(let element of mainscreen){
        element.style.filter = 'blur(0)';
    }
    currentStatus = 0;
}

const commitChoice = () => {
    currentStatus = 1;
    let messageFirstChild = document.getElementsByClassName("message")[1].firstElementChild;
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(randomNumber){
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
        break;
        case 2:
            computerChoice = 'Scissor';
        break;
        default:
            console.error('Entered default case in commitChoice');
    }
    lastComputerChoice = computerChoice.toLowerCase();
    messageFirstChild.innerHTML = `Computer chooses ${computerChoice}`;
    displayChoiceSelected(document.getElementById("computerChoiceDisplayer"), `url(static/${lastComputerChoice}.png)`)
    decideSetWinner();
}

const displayChoiceSelected = (player, file) => {
    player.style.backgroundImage = file;
    player.style.opacity = '1';
}

const decideSetWinner = () => {
    let setStatus = 'tie';
    switch(lastUserChoice){
        case 'rock':
            switch(lastComputerChoice){
                case 'paper':
                    setStatus = 'computer';
                break;
                case 'scissor':
                    setStatus = 'user';
                    break;
            }
            break;
            case 'paper':
                switch(lastComputerChoice){
                    case 'rock':
                        setStatus = 'user';
                        break;
                        case 'scissor':
                    setStatus = 'computer';
                    break;
            }
            break;
            case 'scissor':
            switch(lastComputerChoice){
                case 'rock':
                    setStatus = 'computer';
                break;
                case 'paper':
                    setStatus = 'user';
                    break;
            }
            break;
        default:
            console.error('Entered default case in decider');
    }
    let impMes = impMesCon.firstElementChild;
    switch(setStatus){
        case 'user':
            impMes.innerHTML = "Point Goes to You!";
            impMesCon.style.color = 'green';
            userScore++;
            break;
            case 'tie':
                impMes.innerHTML = "It's a tie!";
                impMesCon.style.color = 'orange';
                break;
                case 'computer':
                    impMes.innerHTML = "Point Goes to the Computer!";
            impMesCon.style.color = 'red';
            computerScore++;
            break;
            default:
                console.error('Entered default case in second switch in decider');
            }
            updateScore();

    setTimeout(intermediateRedirect, relaxationTime * 0.2);
}
const updateScore = () => {
    document.getElementById('userScoreBoard').firstElementChild.innerHTML = userScore;
    document.getElementById('computerScoreBoard').firstElementChild.innerHTML = computerScore;
}
const intermediateRedirect = () => {
    impMesConAdjuster();
    
    setTimeout(() => {
        // Check here whether the game has become decisive
        if(!checkDecisive()){
            document.getElementsByClassName('messageContainer')[0].getElementsByClassName('message')[0].firstElementChild.innerHTML = 'Click below to continue...';
            continueButton.style.display = 'block';
        }
    }, relaxationTime * 0.8);
    // setTimeout(bringNewSet, relaxationTime * 0.8);
}
continueButton.onclick = () => {
    bringNewSet();
}
const bringNewSet = () => {
    continueButton.style.display = 'none';
    resetExceptScore();
}
const resetExceptScore = () => {
    currentStatus = 0;
    impMesCon.style.display = 'none';
    let displayers = Array.from(document.getElementsByClassName('displayer'));
    displayers.forEach((element) => {
        element.style.opacity = 0;
        element.style.backgroundImage = 'none';
    })
    document.getElementsByClassName('messageContainer')[0].getElementsByClassName('message')[0].firstElementChild.innerHTML = 'Choose your next move!';
}
const resetScore = () => {
    userScore = 0;
    computerScore = 0;
    updateScore();
}
const resetAll = () => {
    for(let element of mainscreen){
        element.style.filter = 'blur(0)';
    }
    resetExceptScore();
    resetScore();
    removeFullContainerScreen(endscreen);
}

const checkDecisive = () => {
    if(userScore == winningPoint){
        endgame('user');
        return true;
    }
    if(computerScore == winningPoint){
        endgame('computer');
        return true;
    }
    return false;
}
const endgame = (player) => {
    let toWrite = endscreen.getElementsByTagName('p')[0];
    switch(player){
        case 'user':
            toWrite.innerHTML = 'Congratulations! You have won!';
            toWrite.style.color = 'green';
            break;
            case 'computer':
                toWrite.innerHTML = 'You have lost! Better luck next time!';
            toWrite.style.color = 'red';
        break;
        default:
            console.error('Entered default case in switch case in endgame()');
    }
    currentStatus = 2;
    endscreen.style.display = 'flex';
    for(let element of mainscreen){
        element.style.filter = 'blur(0.2em)';
    }
}
playAgainButton.onclick = () => {
    resetAll();
}
const removeFullContainerScreen = (screen) => {
    screen.style.display = 'none';
}
const main = () => {
    setTimeout(starter, preStartTime);
}
main();