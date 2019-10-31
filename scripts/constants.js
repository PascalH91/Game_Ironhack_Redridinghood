let canvasHeight = window.innerHeight;
let canvasWidth = 1600;
let x = 0;
/* let movingSpeed = 1.5; */
let movingSpeed = 1.5;
let direction = "forward";
let movingState = "still";
let jumpState = "no";
let pushState = "no";
let icebreak = "no";
let icebreakTree = "no";
let t;
let hitobstacleFW = "false";
let hitobstacleBW = "false";
let LeftborderTree = 2000;
let treeYPosition = 740;
let treeXPosition = 1000;
let treeHeight = treeYPosition + 130;
let girlY = 750;

//Trench
let trenchOpen = "false";
let hitTarget = "false";

// let House 
let closeToHouse = "false";
let enteredHouse = "false";



//SNOWBALL
let shootingCount = 0;
let throwState = "false";
let snowballAppearance = "false";
let snowVelocity = 0;
let snowGravity = 1.2;
let snowBallDirection = 10;


let snowball_X = canvasWidth / 2 + 10;
let snowball_Y = girlY - 50;

let fallDown = 0;
let snowBall_Y_Origin = snowball_Y;


function reset() {

    //     if (girlAnimationBreakingIceForward.getFrame() === 49) {




    //         x = 0;
    //         icebreak = "no";
    //         movingSpeed = 1.5;
    //         direction = "forward";
    //         movingState = "still";
    //         jumpState = "no";
    //         pushState = "no";
    //         throwState = "no";
    //         hitobstacleFW = "false";
    //         hitobstacleBW = "false";
    //         LeftborderTree = 2000;
    //         treeYPosition = 740;
    //         treeXPosition = 1000;
    //         treeHeight = treeYPosition + 130;

    //         obstacle1.setup();
    //         tree.setup();
    //         girl.setup();
    //         // /*   tree.setup() */
    //         createCanvas(canvasWidth, canvasHeight);
    //         girlAnimationStandingForward.frameDelay = 2;
    //         girlAnimationStandingBackward.frameDelay = 2;
    //         girlAnimationJumpingForward.frameDelay = 2;
    //         girlAnimationJumpingBackward.frameDelay = 2;
    //         girlAnimationWalkingForward.frameDelay = 2;
    //         girlAnimationWalkingBackward.frameDelay = 2;
    //         girlAnimationPushingForward.frameDelay = 2;
    //         girlAnimationPushingBackward.frameDelay = 2;
    //         girlAnimationBreakingIceForward.frameDelay = 2;
    //         girlAnimationBreakingIceBackward.frameDelay = 2;

    //     }
    //     if (girlAnimationBreakingIceBackward.getFrame() === 49) {
    //         x = 0;
    //         icebreak = "no";
    //         movingSpeed = 1.5;
    //         direction = "forward";
    //         movingState = "still";
    //         jumpState = "no";
    //         pushState = "no";
    //         throwState = "no";
    //         hitobstacleFW = "false";
    //         hitobstacleBW = "false";
    //         LeftborderTree = 2000;
    //         treeYPosition = 740;
    //         treeXPosition = 1000;
    //         treeHeight = treeYPosition + 130;

    //         obstacle1.setup();
    //         tree.setup();
    //         girl.setup();
    //         // /*   tree.setup() */
    //         createCanvas(canvasWidth, canvasHeight);
    //         girlAnimationStandingForward.frameDelay = 2;
    //         girlAnimationStandingBackward.frameDelay = 2;
    //         girlAnimationJumpingForward.frameDelay = 2;
    //         girlAnimationJumpingBackward.frameDelay = 2;
    //         girlAnimationWalkingForward.frameDelay = 2;
    //         girlAnimationWalkingBackward.frameDelay = 2;
    //         girlAnimationPushingForward.frameDelay = 2;
    //         girlAnimationPushingBackward.frameDelay = 2;
    //         girlAnimationBreakingIceForward.frameDelay = 2;
    //         girlAnimationBreakingIceBackward.frameDelay = 2;
    //     }
}