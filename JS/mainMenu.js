console.log("I am linked!")

const startGame = document.getElementById('start-game');


startGame.addEventListener('click', event => {
    console.log('hello click')
    window.open('./HTML/levelOne.html')
    window.close();
})