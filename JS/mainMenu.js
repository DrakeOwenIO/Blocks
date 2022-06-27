// Declare our buttons
const resetButton = document.getElementById('reset-score');
const startGame = document.getElementById('start-game');

// Declare highscore item
var highScoreCounter = document.getElementById('highScore');


// Check if theres a highscore
if (localStorage.getItem('highScore') != null) {
    highScore = localStorage.getItem('highScore');
    highScoreCounter.innerText = 'Highscore: ' + highScore;
}
else {
    highScoreCounter.innerText = 'Highscore: No highscore recorded yet!';
}

// Button to start the game
startGame.addEventListener('click', event => {
    console.log('hello click')
    window.open('./HTML/levelOne.html')
    window.close();
})

// Button to reset highscore
resetButton.addEventListener('click', event => {
    if (localStorage.getItem('highScore') != null) {
        localStorage.clear();
        highScoreCounter.innerText = 'Highscore: 0';
    }
    else {
        alert("No highscore set!")
    }
})
