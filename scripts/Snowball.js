let snowballSprite;
let snowBallImage;

class Snowball {

    draw() {
        noStroke();
        ellipse(snowball_X, snowball_Y, 15, 15)
        /*         snowballSprite = createSprite(snowball_X, snowball_Y, 15, 15);
                snowballSprite.addImage(snowBallImage)
                snowballSprite.setCollider("circle", 0, 0, 200, 200); */
    }
}