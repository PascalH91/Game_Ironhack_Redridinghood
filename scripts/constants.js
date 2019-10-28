let canvasHeight = window.innerHeight;
let canvasWidth = 1600;
let x = 0;
let movingSpeed = 1.5;
let direction = "forward";
let movingState = "still";
let jumpState = "no";
let pushState = "no";
let throwState = "no";
let icebreak = "no";
let t;
let hitobstacleFW = "false";
let hitobstacleBW = "false";


function reset() {

    if (girlAnimationBreakingIceForward.getFrame() === 49) {
        x = 0;
        icebreak = "no";
    }
}