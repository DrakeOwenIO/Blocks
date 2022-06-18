// import {Player} from './playerClass.js';

// Defining the play area
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var canvasWidth = 0;
var canvasHeight = 0;

// Defining Player Properties
var playerX = 0;
var playerY = 0;
var playerSize = 100;
var playerSpeed = 5;

// Recording keypresses
var keys = [];

// mainPlayer = new Player(0, 0, 100, 5);

// Key pressed check
window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
})

// Key released check
window.addEventListener("keyup", function(e){
    keys[e.keyCode] = false;
})

// Initialization
function init(){
    touchingLeftWall = false;

    canvasWidth = 800
    canvasHeight = 600;

    canvas.setAttribute("width", canvasWidth)
    canvas.setAttribute("height", canvasHeight)

    playerX = canvasWidth/2;
    playerY = canvasHeight/2;
}

// Gameloop
function loop(){
    update();
    render();
}

// Where all the changes to the screen happens
function update(){

// MOVEMENT KEYS
    // Move Left | A
    if(keys[65] == true) {
        if(playerX > canvasWidth - canvasWidth)
        {
            playerX = playerX - playerSpeed;
            console.log(playerX) 
        }
    }

    // Move Up | W
    if(keys[87] == true) {
        if(playerY > canvasHeight - canvasHeight)
        {
            playerY = playerY - playerSpeed;
            console.log(playerY)   
        }

    }

    // Move Down | S
    if(keys[83] == true) {
        if(playerY < canvasHeight - 100)
        {
            playerY = playerY + playerSpeed;
            console.log(playerX)   
        }
    }

    //Move Right | D
    if(keys[68] == true) {
        if(playerX < canvasWidth - 100)
        {
            playerX = playerX + playerSpeed;
            console.log(playerX)   
        }
    }
}

// Render stuff on the screen
function render(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#FF00C1";
    context.fillRect(playerX, playerY, playerSize, playerSize);

}

// Running the game at 60fps
window.setInterval(loop, 1000/60);

// Calling the initialization
init();