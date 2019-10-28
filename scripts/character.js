let SpriteSheetGirlStandingForward;
let girlAnimationStandingForward;
let SpriteSheetGirlStandingBackward;
let girlAnimationStandingBackward;

let SpriteSheetGirlJumpingForward;
let girlAnimationJumpingForward;
let SpriteSheetGirlJumpingBackward;
let girlAnimationJumpingBackward;

let SpriteSheetGirlWalkingForward;
let girlAnimationWalkingForward;
let SpriteSheetGirlWalkingBackward;
let girlAnimationWalkingBackward;

let SpriteSheetGirlPushingForward;
let girlAnimationPushingForward;
let SpriteSheetGirlPushingBackward;
let girlAnimationPushingBackward;

let SpriteSheetGirlBreakingIceForward;
let girlAnimationBreakingIceForward;
let SpriteSheetGirlBreakingIceBackward;
let girlAnimationBreakingIceBackward;


/* let girlCollider;
let actualImage;
let positionColliderX; */
let girlY = 750;

class Girl {
    constructor(xSize, ySize) {
        this.width = xSize;
        this.height = ySize;
        this.velocity = 0;
        this.gravity = 0.4;
        this.jumpCount = 0;

    }

    setup() {
        this.y = girlY;
        /*       girlY = this.y */
        this.originalY = this.y;
        /*  SPRITESHEETS*/

        /*         girlCollider = createSprite(canvasWidth / 2 - 10, this.y, 80, 140);
                girlCollider.setCollider("rectangle", 0, 0, 80, 140);
         */


        SpriteSheetGirlStandingForward = loadSpriteSheet("/Assets/Spritesheets/Stand_Resize_FW.png", 115, 166, 50);

        girlAnimationStandingForward = loadAnimation(SpriteSheetGirlStandingForward);

        SpriteSheetGirlStandingBackward = loadSpriteSheet("/Assets/Spritesheets/Stand_Resize_BW.png", 115, 166, 50);
        girlAnimationStandingBackward = loadAnimation(SpriteSheetGirlStandingBackward);

        SpriteSheetGirlJumpingForward = loadSpriteSheet("/Assets/Spritesheets/Jump_Resize_FW.png", 115, 166, 25);
        girlAnimationJumpingForward = loadAnimation(SpriteSheetGirlJumpingForward);

        SpriteSheetGirlJumpingBackward = loadSpriteSheet("/Assets/Spritesheets/Jump_Resize_BW.png", 115, 166, 25);
        girlAnimationJumpingBackward = loadAnimation(SpriteSheetGirlJumpingBackward);

        SpriteSheetGirlWalkingForward = loadSpriteSheet("/Assets/Spritesheets/Walk_2_Resize_FW.png", 115, 166, 50);
        girlAnimationWalkingForward = loadAnimation(SpriteSheetGirlWalkingForward);

        SpriteSheetGirlWalkingBackward = loadSpriteSheet("/Assets/Spritesheets/Walk_2_Resize_reverse.png", 115, 166, 50);
        girlAnimationWalkingBackward = loadAnimation(SpriteSheetGirlWalkingBackward);

        SpriteSheetGirlPushingForward = loadSpriteSheet("/Assets/Spritesheets/Push_Resize_FW.png", 129, 166, 50);
        girlAnimationPushingForward = loadAnimation(SpriteSheetGirlPushingForward);

        SpriteSheetGirlPushingBackward = loadSpriteSheet("/Assets/Spritesheets/Push_Resize_BW.png", 129, 166, 50);
        girlAnimationPushingBackward = loadAnimation(SpriteSheetGirlPushingBackward);

        SpriteSheetGirlBreakingIceForward = loadSpriteSheet("/Assets/Spritesheets/Ice_Resize_FW.png", 115, 166, 50);
        girlAnimationBreakingIceForward = loadAnimation(SpriteSheetGirlBreakingIceForward);

        SpriteSheetGirlBreakingIceBackward = loadSpriteSheet("/Assets/Spritesheets/Ice_Resize _BW.png", 115, 166, 50);
        girlAnimationBreakingIceBackward = loadAnimation(SpriteSheetGirlBreakingIceBackward);

    }

    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity

        if (this.y > this.originalY) {
            this.y = this.originalY;

            this.jumpCount = 0;
            jumpState = "no";
        }

        /*         positionColliderX = girlCollider.position.x;
                girlCollider.position.y = this.y;
                girlCollider.position.x = canvasWidth / 2;
                girlCollider.debug = true; */


        if (x < -3670 && x > -4200 && this.y === this.originalY) {
            icebreak = "yes"

        }


        //hit first rock
        /*         if (this.y < 650 && x < -920 && x > -1100) {
                    this.originalY = 570;
                } else if (x < -920 && x > -1100 && direction === "forward") {
                    hitobstacleFW = "true"
                } else if (x < -920 && x > -1100 && direction === "backward") {
                    hitobstacleBW = "true"
                } else {
                    hitobstacleFW = "false";
                    hitobstacleBW = "false";
                }
                */

        //hit second rock

        if (this.y < 650 && x < -920 && x > -1100) {
            this.originalY = 570;
        } else if (this.y < 650 && x < -1130 && x > -1200) {
            this.originalY = 570;
        } else if (this.y < 500 && x < -1170 && x > -1360) {
            this.originalY = 480;
        } else if (this.y < 400 && x < -1450 && x > -1600) {
            this.originalY = 370;
        } else if (x < -920 && x > -1100 && direction === "forward" || x < -1170 && x > -1360 && direction === "forward" || x < -1450 && x > -1600 && direction === "forward") {
            hitobstacleFW = "true"
        } else if (x < -920 && x > -1100 && direction === "backward" || x < -1170 && x > -1360 && direction === "backward" || x < -1450 && x > -1600 && direction === "backward") {
            hitobstacleBW = "true"
        } else {
            hitobstacleFW = "false";
            hitobstacleBW = "false";
        }

        if (x > -920 || x < -1100 && x > -1120 || x < -1360 && x > -1450 || x < -1600) {
            this.originalY = 750;
        }





        if (jumpState === "no" && direction === "forward" && icebreak === "yes") {
            animation(girlAnimationBreakingIceForward, canvasWidth / 2, this.y)
        } else if (jumpState === "no" && direction === "backward" && icebreak === "yes") {
            animation(girlAnimationBreakingIceBackward, canvasWidth / 2, this.y)
        } else if (jumpState === "no" && direction === "forward" && movingState === "moving" && pushState === "push") {
            animation(girlAnimationPushingForward, canvasWidth / 2, this.y);

        } else if (jumpState === "no" && direction === "backward" && movingState === "moving" && pushState === "push") {
            animation(girlAnimationPushingBackward, canvasWidth / 2, this.y)
        } else if (jumpState === "no" && direction === "forward" && movingState === "moving") {
            animation(girlAnimationWalkingForward, canvasWidth / 2, this.y)
        } else if (jumpState === "no" && direction === "backward" && movingState === "moving") {
            animation(girlAnimationWalkingBackward, canvasWidth / 2, this.y)
        } else if (jumpState === "yes" && direction === "forward") {
            animation(girlAnimationJumpingForward, canvasWidth / 2, this.y);
        } else if (jumpState === "yes" && direction === "backward") {
            animation(girlAnimationJumpingBackward, canvasWidth / 2, this.y);
        } else if (direction === "forward") {
            /*  girlAnimationStandingForward.scale = 2; */
            animation(girlAnimationStandingForward, canvasWidth / 2, this.y);


        } else if (direction === "backward") {
            animation(girlAnimationStandingBackward, canvasWidth / 2, this.y);
        }

        /*   drawSprite(this.sprite) */
    }

    jump() {
        if (this.jumpCount < 1) {
            this.velocity = -12;
            this.jumpCount++;
            jumpState = "yes";
        }
    }

}


function keyPressed() {
    if (keyCode === 32) {
        girl.jump()
    } else if (keyCode === 87) {
        pushState = "push";
        movingSpeed = 0.5;
    }

    if (keyCode !== 87) {
        pushState = "no";
        movingSpeed = 1.5;
    }
}