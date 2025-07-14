function pickComputerMove() {
    let randomNumber=Math.random();
    let computerMove='';
    if (randomNumber < 1 / 3) {
        computerMove='rock';
    } else if (randomNumber < 2 / 3) {
        computerMove='paper';
    } else {
        computerMove='scissors';
    }
    return computerMove;
}
function playGame(playerMove) {
    let computerMove=pickComputerMove();
    let result='';
    if(playerMove=='rock') {
        if(computerMove=='rock') {
            result='Tie';
        } else if(computerMove==='paper') {
            result='Computer Wins';
        } else{
            result='You Win';
        }
    } else if(playerMove=='paper') {
        if(computerMove=='paper') {
            result='Tie';
        } else if(computerMove=='rock') {
            result='You Win';
        } else{
            result='Computer Wins';
        }
    } else if(playerMove=='scissors') {
        if(computerMove=='scissors') {
            result='Tie';
        }else if(computerMove=='rock') {
            result='Computer Wins';
        } else{
            result='You Win';
        }
    } else{
        result='Invalid move!';
    }

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
