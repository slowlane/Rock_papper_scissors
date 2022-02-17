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


function game(playerSelection){
    //for (let i = 0; i < 5; i++) {

        //change below line to take input from button event
        //let playerSelection = prompt("Input rock, paper or scissors!");
        let result = playRound(playerSelection, computerPlay());
        let resultCheck = result.split(" ");


 
        return resultCheck[1];
     //}
}

//game();

const btnList = document.querySelectorAll('.btn');
const resultBox = document.querySelector('.results');


let playerTally = 0;
let computerTally = 0;
let drawTally = 0;

const playerTallyPara = document.createElement('p');
const computerTallyPara = document.createElement('p');
const drawTallyPara = document.createElement('p');
const resultsPara = document.createElement('p');

playerTallyPara.classList.add("tallyPara");
computerTallyPara.classList.add("tallyPara");
drawTallyPara.classList.add("tallyPara");
resultsPara.classList.add("resultPara");

btnList.forEach(btn => {
    btn.addEventListener('click', e => {
        
        if(tallySum(playerTally, computerTally, drawTally) === 5){
            //Potentially add a header message "that's all folks..?"
            
        }else{
            resultBox.innerHTML = "";
            const result = game(btn.textContent);

            const newPara = document.createElement('p');
            newPara.classList.add("paraLarge");


            if(result === "win!"){
                newPara.textContent = "You win!";
        
            }else if(result === "lose!"){
                newPara.textContent = "You lose!";
        
            }else{
                newPara.textContent = "It's a draw!";
            
        }
            addTallies(result);
        
            resultBox.appendChild(newPara);
            resultBox.appendChild(playerTallyPara);
            resultBox.appendChild(computerTallyPara);
            resultBox.appendChild(drawTallyPara);
    }
    tallySum(playerTally, computerTally, drawTally);
    })
});

function addTallies(append){
        if(append === "win!"){
            playerTally++;
            playerTallyPara.textContent = `You have won ${playerTally} time(s)!`;
        }else if(append === "lose!") {
            computerTally++;
            computerTallyPara.textContent = `You have lost ${computerTally} time(s)!`;
        }
        else{
            drawTally++;
            drawTallyPara.textContent = `You have drawn ${drawTally} time(s)!`;
        }
}

function tallySum(playerNum, compNum, drawNum){
    if(playerNum + compNum + drawNum === 5){
        if(playerNum > compNum){
            resultsPara.textContent = "You have won!";
        } else if (compNum > playerNum){
            resultsPara.textContent = "The computer has won! It's over!";
        } else {
            resultsPara.textContent = "It's a draw...";
        }
        resultBox.appendChild(resultsPara);
    }
    return playerNum + compNum + drawNum;
}
/*
For now, remove the logic that plays exactly five rounds.

Create three buttons, one for each selection. 
Add an event listener to the buttons that call 
your playRound function with the correct 
playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)

Add a div for displaying results and change all 
of your console.logs into DOM methods.

Display the running score, and announce a 
winner of the game once one player reaches 5 points.

You will likely have to refactor (rework/rewrite) 
your original code to make it work for this. That’s OK! 

Reworking old code is an important part of a programmer’s life.

Once you’re all done with your UI and made sure everything’s 
satisfactory, commit your changes to the rps-ui branch.

*/