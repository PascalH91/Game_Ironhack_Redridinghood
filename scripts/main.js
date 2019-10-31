let backgroundLast = new BackgroundLast;
let backgroundsecondLast = new BackgroundSecondLast;
let middleGround = new MiddleGround;
let lake = new LakeSolo;
let fenceFront = new FenceFront;
let fenceDoor = new FenceDoor;
let house = new House;
let houseDoor = new HouseDoor;
let target = new Target;

let girl = new Girl;
let snow = new Snow;
let obstacle1 = new Obstacle1;
let tree = new ObstacleTree;
let snowball = new Snowball;
/* let fenceDoor = new FenceDoor; */

function preload() {
    //BG_Images
    BGImageLast = loadImage("/Assets/Background_Last_Layer_2.png");
    BGImageSecondLast = loadImage("/Assets/Background_Second_Last_Layer.png");
    ImgMiddleGround = loadImage("/Assets/MiddleGround__Layer_191031.png");
    ImgLakeSolo = loadImage("/Assets/BackgroundLake_Solo.png");
    ImgFenceFront = loadImage("/Assets/Fence_Front.png");
    /*   snowBallImage = loadImage("/Assets/Snowball-PNG-Transparent-Picture.png") */

    //Obstacles
    obstacle1.setup()
    tree.setup()
    fenceDoor.setup()
    house.setup()
    houseDoor.setup()
    target.setup()

    //Spritesheets Girl
    girl.setup();

}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    girlAnimationStandingForward.frameDelay = 2;
    girlAnimationStandingBackward.frameDelay = 2;
    girlAnimationJumpingForward.frameDelay = 2;
    girlAnimationJumpingBackward.frameDelay = 2;
    girlAnimationWalkingForward.frameDelay = 2;
    girlAnimationWalkingBackward.frameDelay = 2;
    girlAnimationPushingForward.frameDelay = 2;
    girlAnimationPushingBackward.frameDelay = 2;
    girlAnimationBreakingIceForward.frameDelay = 2;
    girlAnimationBreakingIceBackward.frameDelay = 2;
    girlAnimationThrowingForward.frameDelay = 2;
    girlAnimationThrowingBackward.frameDelay = 2;
    fenceDoorOpenAnimation.frameDelay = 2;
    fenceDoorOpeningAnimation.frameDelay = 2;
    fenceDoorClosedAnimation.frameDelay = 2;
    houseSpritesheet.frameDelay = 2;
    houseAnimation.frameDelay = 2;
    houseDoorClosedSpritesheet.frameDelay = 2;
    houseDoorAnimationclosed.frameDelay = 2;
    houseDoorOpeningSpritesheet.frameDelay = 2;
    houseDoorOpeningAnimation.frameDelay = 2;
    targetSpritesheet.frameDelay = 2;
    targetAnimation.frameDelay = 2;
    targetAnimationStill.frameDelay = 2;

}

function draw() {
    background("black", 0, 0, 10000, 1000);
    t = frameCount / 60;
    movingState = "still";
    backgroundLast.draw();
    backgroundsecondLast.draw();
    middleGround.draw();
    tree.draw()
    obstacle1.draw();
    drawSprites();
    fenceDoor.draw();
    house.draw();
    target.draw()
    girl.draw();

    houseDoor.draw();

    girl.throwingBall()
    lake.draw();
    fenceFront.draw();
    snow.draw();
    reset();
    console.log(enteredHouse)

    /*    push()
       fill("red")
       rect(500, 700 , 200, 200)
       pop(); */
}


/* document.querySelector("button").onclick = reset() */