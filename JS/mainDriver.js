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

// Collision Dectection Variables
var touchingLeftWall = false;
var touchingRightWall = false;
var touchingTopWall = false;
var touchingBottomWall = false;

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

    canvasWidth = 800;
    canvasHeight = 600;

    canvas.setAttribute("width", 800)
    canvas.setAttribute("height", 600)

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
        playerX = playerX - playerSpeed;   
    }

    // Move Up | W
    if(keys[87] == true) {
        playerY = playerY - playerSpeed;

    }

    // Move Down | S
    if(keys[83] == true) {
        playerY = playerY + playerSpeed;
    }

    //Move Right | D
    if(keys[68] == true) {
        playerX = playerX + playerSpeed;
    }


//Game Boundary Collision
    // Left Wall
    if(playerX == canvasWidth - canvasWidth) {
        touchingLeftWall = true;
        playerX = 0;
    }

    console.log(touchingLeftWall);
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