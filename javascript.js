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
        return "tie";
        //return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock.");
        return "lose";
        //return "You lose! Paper beats rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "scissor"){
        console.log("You win! Rock beats scissor.");
        return "win";
        //return "You win! Rock beats scissor.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats rock.");
        return "win";
        //return "You win! Paper beats rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
        console.log("You lose! Scissor beats paper.");
        return "lose";
        //return "You lose! Scissor beats paper.";
    }
    else if (playerSelection == "scissor" && computerSelection == "paper"){
        console.log("You win! Scissor beats paper.");
        return "win";
        //return "You win! Scissor beats paper.";
    }
    else if (playerSelection == "scissor" && computerSelection == "rock"){
        console.log("You lose! Rock beats scissor.");
        return "lose";
        //return "You lose! Rock beats scissor."
    }
    else {
        return "Please input rock, paper, or scissor.";
    }
}

function game(){

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
