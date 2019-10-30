let backgroundLast = new BackgroundLast;
let backgroundsecondLast = new BackgroundSecondLast;
let middleGround = new MiddleGround;
let lake = new LakeSolo;
let girl = new Girl;
let snow = new Snow;
let obstacle1 = new Obstacle1;
let tree = new ObstacleTree;
let snowball = new Snowball;


function preload() {
    //BG_Images
    BGImageLast = loadImage("/Assets/Background_Last_Layer_2.png");
    BGImageSecondLast = loadImage("/Assets/Background_Second_Last_Layer.png");
    ImgMiddleGround = loadImage("/Assets/MiddleGround__Layer_191028.png");
    ImgLakeSolo = loadImage("/Assets/BackgroundLake_Solo.png");

    //Obstacles
    obstacle1.setup()
    tree.setup()


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

    girl.draw();
    girl.throwingBall()
    lake.draw();

    snow.draw();
    reset();

    /*    push()
       fill("red")
       rect(500, 700 , 200, 200)
       pop(); */
}


document.querySelector("button").onclick = reset()