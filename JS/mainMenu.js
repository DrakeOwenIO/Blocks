console.log("I am linked!")

const startGame = document.getElementById('start-game');


startGame.addEventListener('click', event => {
    console.log('I was clicked')
    window.location.href = './HTML/levelOne.html'
})