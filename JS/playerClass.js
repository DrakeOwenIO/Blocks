export default class Player {
    constructor(posX, posY, size, speed, color) {
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.speed = speed;
        this.color = color;
    }

    render(context, object, canvasWidth, canvasHeight) {
        // Render Player
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.fillStyle = object.color;
        context.fillRect(object.posX, object.posY, object.size, object.size);
    }

    movement(keyPressArray, object, canvasWidth, canvasHeight) {
        // MOVEMENT KEYS
        // Move Left | A
        if (keyPressArray[65] == true) {
            if (object.posX > canvasWidth - canvasWidth) {
                object.posX = object.posX - object.speed;
            }
        }

        // Move Up | W
        if (keyPressArray[87] == true) {
            if (object.posY > canvasHeight - canvasHeight) {
                object.posY = object.posY - object.speed;
            }

        }

        // Move Down | S
        if (keyPressArray[83] == true) {
            if (object.posY < canvasHeight - object.size) {
                object.posY = object.posY + object.speed;
            }
        }

        //Move Right | D
        if (keyPressArray[68] == true) {
            if (object.posX < canvasWidth - object.size) {
                object.posX = object.posX + object.speed;
            }
        }
    }
}