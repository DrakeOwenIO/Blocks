import Obstacle from "./obstacleClass.js";

 // Generates random Y coord
function generateY(maxHeight){
   var randomNumber = Math.floor(Math.random() * (maxHeight - 100) + 50);

   console.log(randomNumber);

   return randomNumber;
}

// Generates random X coord
function generateX(maxRange, width){

    var randomNumber = Math.floor(Math.random() * (maxRange) + maxRange);

    console.log(randomNumber);
 
    return randomNumber;
 }

 // Spawns eveything
export function spawn(canvasWidth, canvasHeight, context) {
    
    var objWid = 100; 

    var object = new Obstacle(generateX(canvasWidth, objWid), generateY(canvasHeight), 50, objWid, 10);
    
    return object;    
}