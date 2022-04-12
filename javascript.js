function computerPlay(){
    let ran = Math.floor(Math.random() *3);
    if (ran == 0){
        return "rock";
    }
    else if (ran == 1){
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();


    if (playerSelection == computerSelection ){
        console.log("It's a tie!");
        result.textContent = "It's a tie!";
        return "tie";
        //return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock.");
        result.textContent = "You lose! Paper beats rock.";
        computer.textContent++;
        return "lose";
        //return "You lose! Paper beats rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "scissor"){
        console.log("You win! Rock beats scissor.");
        result.textContent = "You win! Rock beats scissor.";
        player.textContent++;
        return "win";
        //return "You win! Rock beats scissor.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats rock.");
        result.textContent = "You win! Paper beats rock.";
        player.textContent++;
        return "win";
        //return "You win! Paper beats rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
        console.log("You lose! Scissor beats paper.");
        result.textContent = "You lose! Scissor beats paper.";
        computer.textContent++;
        return "lose";
        //return "You lose! Scissor beats paper.";
    }
    else if (playerSelection == "scissor" && computerSelection == "paper"){
        console.log("You win! Scissor beats paper.");
        result.textContent = "You win! Scissor beats paper.";
        player.textContent++;
        return "win";
        //return "You win! Scissor beats paper.";
    }
    else if (playerSelection == "scissor" && computerSelection == "rock"){
        console.log("You lose! Rock beats scissor.");
        result.textContent = "You lose! Rock beats scissor.";
        computer.textContent++;
        return "lose";
        //return "You lose! Rock beats scissor."
    }
    else {
        return "Please input rock, paper, or scissor.";
    }
}

/*function game(){

    let tie=0;
    let win=0;
    let lose=0;

    for (let i = 0 ;i < 5; i++){    
        const playerSelection = prompt("Rock, paper, or scissor?");
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);

        if (round == "lose"){
            lose++;
        }
        else if (round == "win"){
            win++;
        }
        else if(round == "tie"){
            tie++;
        }
    }

    if (win > lose){
        return "You win!"
    }
    else if (win < lose){
        return "You lose!"
    }
    else {
        return "It's a tie!"
    }
}


console.log(game());
*/
const result = document.getElementById('result');
const player = document.getElementById('playerScore');
const computer = document.getElementById('computerScore');
const winner = document.getElementById('winner');



    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id,computerPlay());

        if (player.textContent == 5){
            winner.textContent = "You won!Refresh to play again.";
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissor').disabled = true;
        }
        else if (computer.textContent == 5){
            winner.textContent = "Computer won!Refresh to play again";
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissor').disabled = true;
        }
    });
});



//return score function
//if playround returns win, player score ++
//if playround returns lose, computer score ++
//if player score of computer score = 5, announce winner

//check winner function
//if player ==5, player is winner
//if computer == 5, computer is winner 