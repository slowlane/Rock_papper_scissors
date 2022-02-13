function computerPlay(){
    //Randomly return a number between 1-3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection = "";
    
    
    switch(randomNumber){
        case 1:
            computerSelection = "rock";
        break;
        case 2: 
            computerSelection = "paper";
        break;
        case 3: 
            computerSelection = "scissors";
        break;
        default:
        alert("Something went terribly wrong!");
        break;

    }
    
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    let playerSelected = playerSelection.toLowerCase();

    if(playerSelected === computerSelection){
        return "It's a draw!";
    } else if(playerSelected === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats Rock";
    }
    else if(playerSelected === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors";
    }else if(playerSelected === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats Paper";
    }else if(playerSelected === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock";
    }else if(playerSelected === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats Paper";
    }else if(playerSelected === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats Scissors";
    }else{
        return "Please input a proper value (rock, paper, scissors)";
    }
}
/*const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/


function game(){
    playerTally = 0;
    computerTally = 0;
    drawTally = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input rock, paper or scissors!");
        let result = playRound(playerSelection, computerPlay());
        let resultCheck = result.split(" ");

        if(resultCheck[1] === "win!"){
            playerTally++;
        }else if(resultCheck[1] === "lose!") {
            computerTally++;
        }
        else{
            drawTally++;
        }
        console.log(result);
        console.log(`Currently, player has won ${playerTally} time(s).
        The computer has won ${computerTally} time(s). 
        You've drawn ${drawTally} time(s).`);
     }
}

game();
