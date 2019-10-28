let obstacleImage1;
let obstacleImage2;
let obstacleImage3

let obstacle1Sprite;
let obstacle2Sprite;
let obstacle3Sprite;
let obstacle4Sprite;




class Obstacle1 {
    setup() {
        obstacleImage1 = loadImage("/Assets/Obstacles_09.png");

        obstacle1Sprite = createSprite(1790, 750, 200, 200);
        /*      obstacle1Sprite.addImage(obstacleImage1); */
        obstacle1Sprite.setCollider("rectangle", 0, 0, 200, 200);
        /*       obstacle1Sprite.setCollider("rectangle", 0, 750, 100, 100); */
/*         obstacle2Sprite = createSprite(1890, 750, 50, 50);
        obstacle2Sprite.setCollider("rectangle", 1890, 750, 100, 100); */
        obstacle1Sprite.debug = true;
    }

    draw() {
        /*  image(obstacleImage1, 1690 + x, 610, 200, 300); */
        obstacle1Sprite.position.x = 1790 + x;
     /*    obstacle1Sprite.displace(girlCollider) */

    }

}