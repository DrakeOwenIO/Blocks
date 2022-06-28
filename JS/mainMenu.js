// Declare our buttons
const resetHighscoreBtn = document.getElementById('reset-high-score');
const startGame = document.getElementById('start-game');
const resetTotalScoreBtn = document.getElementById('reset-total-score')

// Declare highscore item
var highScoreCounter = document.getElementById('highScore');
var totalScoreCounter = document.getElementById('totalScore');
var getBattlePassMessage = document.getElementById('battlePassMessage');

// Set Battlepass Message
if (localStorage.getItem('battlepassTier') != null) {
    if(localStorage.getItem('battlepassTier') == '1'){
        getBattlePassMessage.innerText = 'Earn 100 XP to unlock this player color!'
        getBattlePassMessage.style.color = '#9600FF'
    }
    if(localStorage.getItem('battlepassTier') == '2'){
        getBattlePassMessage.innerText = 'Earn 200 XP to unlock this player color!'
        getBattlePassMessage.style.color = '#4900FF'
    }
    if(localStorage.getItem('battlepassTier') == '3'){
        getBattlePassMessage.innerText = 'Earn 300 XP to unlock this player color!'
        getBattlePassMessage.style.color = '#00B8FF'
    }
    if(localStorage.getItem('battlepassTier') == '4'){
        getBattlePassMessage.innerText = 'Earn 400 XP to unlock this player color!'
        getBattlePassMessage.style.color = '#00FFF9'
    }
    if(localStorage.getItem('battlepassTier') == '5'){
        getBattlePassMessage.innerText = 'Battlepass Complete!'
        getBattlePassMessage.style.color = '#9600FF'
    }
}
else {
    getBattlePassMessage.innerText = 'Earn 100 XP to unlock this player color!'
    getBattlePassMessage.style.color = '#9600FF'
}

// Check if theres a highscore
if (localStorage.getItem('highScore') != null) {
    highScore = localStorage.getItem('highScore');
    highScoreCounter.innerText = 'Highscore: ' + highScore;
}
else {
    highScoreCounter.innerText = 'Highscore: No highscore recorded yet!';
}

// Check if theres a highscore
if (localStorage.getItem('totalScore') != null) {
    totalScore = localStorage.getItem('totalScore');
    totalScoreCounter.innerText = 'XP: ' + totalScore;
}
else {
    totalScoreCounter.innerText = 'XP: 0';
}

// Button to start the game
startGame.addEventListener('click', event => {
    console.log('hello click')
    window.open('./HTML/levelOne.html')
    window.close();
})

// Button to reset highscore
resetHighscoreBtn.addEventListener('click', event => {
    if (localStorage.getItem('highScore') != null) {
        localStorage.removeItem('highScore');
        highScoreCounter.innerText = 'Highscore: 0';
    }
    else {
        alert("No highscore set!")
    }
})

// Button to reset total score
resetTotalScoreBtn.addEventListener('click', event => {
    if (localStorage.getItem('totalScore') != null) {
        localStorage.removeItem('totalScore');
        localStorage.removeItem('battlepassTier');
        totalScoreCounter.innerText = 'XP: 0';
    }
    else {
        alert("Earn some XP before resetting!")
    }
})