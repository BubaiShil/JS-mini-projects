const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;


buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const result = userPLAY(btn.id ,computerPlay())
        resultEl.innerText = result
    })
})


function computerPlay(){
    const choices = ["rock","paper","scissors"]
    const randomCHOICEpic = Math.floor( Math.random() * choices.length)
    return choices[randomCHOICEpic]
}

function userPLAY(playerSELECT, computerSELECT){
    if(playerSELECT===computerSELECT){
        return "It's a tie!";
    } else if (
      (playerSELECT === "rock" && computerSELECT === "scissors") ||
      (playerSELECT === "paper" && computerSELECT === "rock") ||
      (playerSELECT === "scissors" && computerSELECT === "paper")
    ){
        playerScore++
        playerScoreEl.innerText = playerScore
        return " YOU WIN " + playerSELECT + " Beats " + computerSELECT
    }else{
        computerScore++
        computerScoreEl.innerText = computerScore
        return "You lose! " + computerSELECT+ " Beats " + playerSELECT;
    }
}

