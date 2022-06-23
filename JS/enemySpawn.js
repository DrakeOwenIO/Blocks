import Obstacle from "./obstacleClass.js";

var lastX = 0;

// Add collsion dectection here so that horizontal blocks don't overlap


// Make a random number
function generateY(maxHeight){
   var randomNumber = Math.floor(Math.random() * (maxHeight - 100) + 50);

   console.log(randomNumber);

   return randomNumber;
}

function generateX(maxRange, width){

    var randomNumber = Math.floor(Math.random() * (maxRange) + maxRange);

    console.log(randomNumber);
 
    return randomNumber;
 }

export function spawn(canvasWidth, canvasHeight, context) {
    
    var objWid = 100; 

    var objectArray = new Obstacle(generateX(canvasWidth, objWid), generateY(canvasHeight), 50, objWid, 10);
    

    return objectArray;    
}