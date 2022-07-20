var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"]

window.onload = function() {
    for(let i = 0;i < 3;i++){
        let choice = document.createElement('img')
        choice.id = choices[i]
        choice.src = choices[i] + ".png"
        document.getElementById('choices').append(choice)
        choice.addEventListener('click', selectChoice)
    }
}

function selectChoice(){
    you = this.id
    document.getElementById('your-choice').src = you + ".png" 

    // random for opponent
    opponent = choices[Math.floor(Math.random() * 3)]
    document.getElementById('opponent-choice').src = opponent + ".png" 

    //check winner
    if (you == opponent) {
        opponentScore += 1
        yourScore += 1
    }
    else {
        if (you == "rock"){
            if (opponent == "paper") {
                opponentScore += 1
            }
            else {
                yourScore += 1
            }
        }
        else if (you == "paper"){
            if (opponent == "rock"){
                yourScore += 1
            }
            else {
                opponentScore += 1
            }
        }
        else if (you == "scissors"){
            if (opponent == "rock"){
                opponentScore += 1
            }
            else {
                yourScore += 1
            }
        }
    }

    document.getElementById('your-score').innerText = yourScore
    document.getElementById('opponent-score').innerText = opponentScore
}