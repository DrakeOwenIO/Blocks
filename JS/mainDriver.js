import Player from "./playerClass.js"

// Defining the play area
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var canvasWidth = 0;
var canvasHeight = 0;

// Recording keypresses
var keys = [];

// Create player
const mainPlayer = new Player(0, 0, 100, 5);

// Temp Rectangle
var rectX = 500
var rectY = 200
var rectLen = 200
var rectWid = 100

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
    canvasWidth = 800;
    canvasHeight = 600;

    canvas.setAttribute("width", canvasWidth)
    canvas.setAttribute("height", canvasHeight)

    mainPlayer.posX = canvasWidth / 2 - (mainPlayer.size / 2);
    mainPlayer.posY = canvasHeight / 2 - (mainPlayer.size / 2);
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
        if(mainPlayer.posX > canvasWidth - canvasWidth)
        {
            mainPlayer.posX = mainPlayer.posX - mainPlayer.speed;
        }
    }

    // Move Up | W
    if(keys[87] == true) {
        if(mainPlayer.posY > canvasHeight - canvasHeight)
        {
            mainPlayer.posY = mainPlayer.posY - mainPlayer.speed;
        }

    }

    // Move Down | S
    if(keys[83] == true) {
        if(mainPlayer.posY < canvasHeight - mainPlayer.size)
        {
            mainPlayer.posY = mainPlayer.posY + mainPlayer.speed;
        }
    }

    //Move Right | D
    if(keys[68] == true) {
        if(mainPlayer.posX < canvasWidth - mainPlayer.size)
        {
            mainPlayer.posX = mainPlayer.posX + mainPlayer.speed;
        }
    }

    // Collision Detection
    if(mainPlayer.posX + mainPlayer.size >= rectX && 
        mainPlayer.posX <= rectX + rectWid && 
        mainPlayer.posY + mainPlayer.size >= rectY &&
        mainPlayer.posY <= rectY + rectLen)
    {
        console.log('colliding');
    }
}

// Render stuff on the screen
function render(){
    // Render Player
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#FF00C1";
    context.fillRect(mainPlayer.posX, mainPlayer.posY, mainPlayer.size, mainPlayer.size);

    // Test Rectangle
    context.fillStyle = "#00B8FF";
    context.fillRect(rectX, rectY, rectWid, rectLen)

}

// Running the game at 60fps
window.setInterval(loop, 1000/60);

// Calling the initialization
init();