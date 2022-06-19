export default class Obstacle {
    constructor(posX, posY, len, wid, speed) {
        this.posX = posX;
        this.posY = posY;
        this.len = len;
        this.wid = wid; 
        this.speed = speed;
    }

    render(context, object) {
        // Test Rectangle
        context.fillStyle = "#00B8FF";
        context.fillRect(object.posX, object.posY, object.wid, object.len)
    }

    move(object){
        object.posX = object.posX - object.speed;
    }
}