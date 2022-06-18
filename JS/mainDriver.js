var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var playerX = 0;
var playerY = 0;
var playerSize = 100;
var playerSpeed = 5;

var canvasWidth = 0;
var canvasHeight = 0;

var keys = [];

var collision = false;

// Key pressed check
window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
})

window.addEventListener("keyup", function(e){
    keys[e.keyCode] = false;
})

// initialization
function init(){
    canvasWidth = 800;
    canvasHeight = 600;

    canvas.setAttribute("width", 800)
    canvas.setAttribute("height", 600)

    playerX = canvasWidth/2;
    playerY = canvasHeight/2;
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

        console.log('PlayerX: ' + playerX);
        console.log('PlayerY: ' + playerY);
    }

    // Move Up
    if(keys[87] == true) {
        playerY = playerY - playerSpeed;

        console.log('PlayerX: ' + playerX);
        console.log('PlayerY: ' + playerY);
    }

    // Move Down
    if(keys[83] == true) {
        playerY = playerY + playerSpeed;
    }

    //Move Right
    if(keys[68] == true) {
        playerX = playerX + playerSpeed;
    }


//Game Boundary Collision
    // Left Wall
    if(playerX == canvasWidth - canvasWidth) {
        
    }

}

// render drawings
function render(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#FF00C1";
    context.fillRect(playerX, playerY, playerSize, playerSize);

}

window.setInterval(loop, 1000/60);

init();