var restart = document.getElementById('restart');
var mainMenu = document.getElementById('main-menu');

restart.addEventListener('click', event => {
    console.log('hello click')
    window.open('./levelOne.html')
    window.close();
})

mainMenu.addEventListener('click', event => {
    console.log('hello click')
    window.open('../index.html')
    window.close();
})