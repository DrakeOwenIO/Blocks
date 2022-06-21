import Obstacle from "./obstacleClass.js";
import Player from "./playerClass.js"
import {spawn} from "./enemySpawn.js";

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
var rect = new Obstacle(670, 15, 200, 100, 5)
var spawnTimer = 0;
var newEnemy = null;
var enemyArray = {};
var enemyCount = 4;

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

    // Run the game at 60fps
    window.setInterval(loop, 1000/60);

    // Set canvas size
    canvasWidth = 800;
    canvasHeight = 600;

    // Display canvas size
    canvas.setAttribute("width", canvasWidth)
    canvas.setAttribute("height", canvasHeight)

    // Player Starting Position
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

    // Let the player move
    mainPlayer.movement(keys, mainPlayer, canvasWidth, canvasHeight)

    // Collision Detection
    // ADD COLLISION DETECTION TO PLAYER CLASS?
    if(mainPlayer.posX + mainPlayer.size >= rect.posX && 
        mainPlayer.posX <= rect.posX + rect.wid && 
        mainPlayer.posY + mainPlayer.size >= rect.posY &&
        mainPlayer.posY <= rect.posY + rect.len)
    {
        gameOver();
    }

    if(spawnTimer === 100){
        console.log('calling spawn');
        for (let i = 0; i < enemyCount; i++)
        {
            enemyArray[i] = spawn(canvasWidth, canvasHeight, context);
        }
        
        spawnTimer = 0;
    }

    // rect.move(rect);
    spawnTimer += 1;
}

// Render stuff to screen
function render(){
    // Call Player Renderer
    mainPlayer.render(context, mainPlayer, canvasWidth, canvasHeight);
    
    // Call Obstacle Renderer
    rect.render(context, rect);

    // newEnemy.render(context, newEnemy);
    // newEnemy.move(newEnemy);

    for(let i = 0; i < enemyCount; i++)
    {
        enemyArray[i].render(context, enemyArray[i]);
        enemyArray[i].move(enemyArray[i]);
    }
   
}

// Ends the game
function gameOver() {
    window.open('./gameOver.html')
    window.close();
}

// Calling the initialization
init();
