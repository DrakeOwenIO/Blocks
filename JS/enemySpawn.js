import Obstacle from "./obstacleClass.js";

// Make a random number
function generateNumber(canvasHeight){
   var randomNumber = Math.floor(Math.random() * (canvasHeight - 100) + 50);

   console.log(randomNumber);

   return randomNumber;
}

export function spawn(canvasWidth, canvasHeight, context) {
    
    var objectArray = new Obstacle(canvasWidth, generateNumber(canvasHeight), 50, 100, 10);
    

    return objectArray;    
}

