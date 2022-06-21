import Obstacle from "./obstacleClass.js";

// Make a random number
function generateNumber(numberRange){
   var randomNumber = Math.floor(Math.random() * (numberRange - 50) + 50);

   console.log(randomNumber);

   return randomNumber;
}

export function spawn(canvasWidth, canvasHeight, context) {
    var enemyCount = 10;

    
    var objectArray = new Obstacle(canvasWidth, generateNumber(canvasHeight - 2), 50, 100, 10);
    

    return objectArray;    
}

