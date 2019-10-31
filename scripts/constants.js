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

//GAMESTATUS
let gameMode = 0;
let saveZone = "deactivated";

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


//TIMER
let miliseconds, seconds, minutes;
let intervalation;

//TIMERFUNCTION 
class Timer {
    setup() {
        if (gameMode === 1) {
            minutes = 2 - floor(frameCount / 3600).toString();

            const sec = 59 - (floor(frameCount / 60)) % 60
            if (sec.toString().length < 2) {
                seconds = `0${sec}`
            } else {
                seconds = sec.toString()
            }


            if ((60 - frameCount % 60).toString().length < 2) {
                miliseconds = `0${60-frameCount%60}`;
            } else {
                miliseconds = (60 - frameCount % 60).toString();
            }

            document.querySelector("h2.timer").innerHTML = minutes + ":" + seconds /*  + ":" + miliseconds */ ;
            if (minutes < 0) {
                document.querySelector("h2.timer").innerHTML = "0:00:00"
                gameMode = 6;
                frameCount = 0;
            }
        }
    }
}


function startWindow() {
    if (gameMode === 0) {
        document.querySelector("#start").style.visibility = "visible"
    }
}


function restartWindow() {
    if (gameMode === 3) {
        document.querySelector("#restart").style.visibility = "visible"
    }
}

function restartIceWindow() {
    if (gameMode === 5) {
        document.querySelector("#restartIce").style.visibility = "visible"
    }
}

function restartTimeWindow() {
    if (gameMode === 6) {
        document.querySelector("#restartTime").style.visibility = "visible"
    }
}

function winningWindow() {
    if (gameMode === 4) {
        document.querySelector("#winning").style.visibility = "visible"
    }
}


function startGame() {
    gameMode = 1;
    frameCount = 0;
    // document.querySelector('.start').style.color = 'green'
}

function restart() {

    /*  canvas.remove() */

    frameCount = 0;
    x = 0;
    /* let movingSpeed = 1.5; */
    movingSpeed = 1.5;
    direction = "forward";
    movingState = "still";
    jumpState = "no";
    pushState = "no";
    icebreak = "no";
    icebreakTree = "no";

    hitobstacleFW = "false";
    hitobstacleBW = "false";
    LeftborderTree = 2000;
    treeYPosition = 740;
    treeXPosition = 1000;
    treeHeight = treeYPosition + 130;
    girlY = 750;

    //GAMESTATUS
    gameMode = 1;
    saveZone = "deactivated";

    //Trench
    trenchOpen = "false";
    hitTarget = "false";
    hitArr = [];

    // let House 
    closeToHouse = "false";
    enteredHouse = "false";

    //SNOWBALL
    shootingCount = 0;
    throwState = "false";
    snowballAppearance = "false";
    snowVelocity = 0;
    snowGravity = 1.2;
    snowBallDirection = 10;
    snowball_X = canvasWidth / 2 + 10;
    snowball_Y = girlY - 50;
    fallDown = 0;
    snowBall_Y_Origin = snowball_Y;

    obstacle1.setup()
    fenceDoor.setup()
    house.setup()
    houseDoor.setup()
    target.setup()
    girl.setup();

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

    document.querySelector("#restart").style.visibility = "hidden";
    document.querySelector("#winning").style.visibility = "hidden";
    document.querySelector("#restartIce").style.visibility = "hidden";
    document.querySelector("#restartTime").style.visibility = "hidden";

}