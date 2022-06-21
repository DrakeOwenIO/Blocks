import Player from "./playerClass.js"
import {spawn} from "./enemySpawn.js";

// Defining the play area and score
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var canvasWidth = 0;
var canvasHeight = 0;
var score = 0;
var scoreTimer = 0;
var scoreCounter = document.getElementById('score');

// Recording keypresses
var keys = [];

// Create player
const mainPlayer = new Player(0, 0, 90, 5);

// Enemy Spawning Variables
var spawnTimer = 0;
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

// Detects if player has hit an enemy
function hitDetection(player, enemy) {
    if(player.posX + player.size >= enemy.posX && 
        player.posX <= enemy.posX + enemy.wid && 
        player.posY + player.size >= enemy.posY &&
        player.posY <= enemy.posY + enemy.len)
    {
        gameOver();
    }   
}

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

    // Start score counter
    scoreCounter.innerText = 'Score: ' + score;

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

    // Spawn new enemies
    if(spawnTimer === 100){
        console.log('calling spawn');
        for (let i = 0; i < enemyCount; i++)
        {
            enemyArray[i] = spawn(canvasWidth, canvasHeight, context);
        }
        
        spawnTimer = 0;
    }

    // Update Score
    if(scoreTimer === 60)
    {
        score += 1;
        scoreCounter = document.getElementById('score');
        scoreCounter.innerHTML = 'Score: ' + score;

        scoreTimer = 0;
    }

    // Increment Timers
    spawnTimer += 1;
    scoreTimer += 1;
}

// Render stuff to screen
function render(){
    // Call Player Renderer
    mainPlayer.render(context, mainPlayer, canvasWidth, canvasHeight);

    // Render Enemies
    for(let i = 0; i < enemyCount; i++)
    {
        enemyArray[i].render(context, enemyArray[i]);
        enemyArray[i].move(enemyArray[i]);
        hitDetection(mainPlayer, enemyArray[i]);
    }
   
}

// Ends the game
function gameOver() {
    window.open('./gameOver.html')
    window.close();
}

// Calling the initialization
init();
