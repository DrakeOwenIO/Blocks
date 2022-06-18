console.log('linked');

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var playerX = 0;
var playerY = 0;
var playerSize = 100;
var playerSpeed = 5;
var keys = [];

// Key pressed check
window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
})

window.addEventListener("keyup", function(e){
    keys[e.keyCode] = false;
})

// initialization
function init(){
    playerX = 800/2;
    playerY = 600/2;
}

// gameloop
function loop(){
    update();
    render();
}

// Update the game window
function update(){

// MOVEMENT KEYS
    // Move Left
    if(keys[65] == true) {
        playerX = playerX - playerSpeed;
    }

    // Move Up
    if(keys[87] == true) {
        playerY = playerY - playerSpeed;
    }

    // Move Down
    if(keys[83] == true) {
        playerY = playerY + playerSpeed;
    }

    //Move Right
    if(keys[68] == true) {
        playerX = playerX + playerSpeed;
    }

// Collision

}

// render drawings
function render(){
    context.clearRect(0, 0, 800, 600);
    context.fillStyle = "#FF00C1";
    context.fillRect(playerX, playerY, playerSize, playerSize);

}

window.setInterval(loop, 1000/60);

init()