var restart = document.getElementById('restart');
var mainMenu = document.getElementById('main-menu');
var score = localStorage.getItem('score');
var scoreDisplay = document.getElementById('score');

// Restart button
restart.addEventListener('click', event => {
    console.log('hello click')
    window.open('./levelOne.html')
    window.close();
})

// Go tot main menu
mainMenu.addEventListener('click', event => {
    console.log('hello click')
    window.open('../index.html')
    window.close();
})

// Display Score
scoreDisplay.innerText = 'Score: ' + score;