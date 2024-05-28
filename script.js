const choices=['rock', 'paper','scissors'];

const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");

let playerScore=0;
let computerScore=0;

function playGame(playerChoice)
{
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(computerChoice===playerChoice)
        {
            result="It's a TIE!";
        }
    else
    {
        switch(playerChoice)
        {
            case 'rock':
                result=(computerChoice==='scissors')?"You WIN!":"You LOSE!";
                break;
            case 'scissors':
                result=(computerChoice==='paper')?"You WIN!":"You LOSE!";
                break;
            case 'paper':
                result=(computerChoice==='rock')?"You WIN!":"You LOSE!";
                break;
        }
    }

    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText","redText")
    if(result=="You WIN!")
        {
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;

        }
        
    else if(result=="You LOSE!")
        {
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;

        }
}