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

let SpriteSheetGirlThrowingForward;
let girlAnimationThrowingForward;
let SpriteSheetGirlThrowingBackward;
let girlAnimationThrowingBackward;

class Girl {
    constructor(xSize, ySize) {
        this.width = xSize;
        this.height = ySize;
        this.velocity = 0;
        this.gravity = 0.4;
        this.jumpCount = 0;
        this.snowballs = [];
    }

    setup() {
        this.y = girlY;

        this.originalY = this.y;


        SpriteSheetGirlStandingForward = loadSpriteSheet("Assets/Spritesheets/Stand_Resize_FW.png", 115, 166, 50);

        girlAnimationStandingForward = loadAnimation(SpriteSheetGirlStandingForward);

        SpriteSheetGirlStandingBackward = loadSpriteSheet("Assets/Spritesheets/Stand_Resize_BW.png", 115, 166, 50);
        girlAnimationStandingBackward = loadAnimation(SpriteSheetGirlStandingBackward);

        SpriteSheetGirlJumpingForward = loadSpriteSheet("Assets/Spritesheets/Jump_Resize_FW.png", 115, 166, 25);
        girlAnimationJumpingForward = loadAnimation(SpriteSheetGirlJumpingForward);

        SpriteSheetGirlJumpingBackward = loadSpriteSheet("Assets/Spritesheets/Jump_Resize_BW.png", 115, 166, 25);
        girlAnimationJumpingBackward = loadAnimation(SpriteSheetGirlJumpingBackward);

        SpriteSheetGirlWalkingForward = loadSpriteSheet("Assets/Spritesheets/Walk_2_Resize_FW.png", 115, 166, 50);
        girlAnimationWalkingForward = loadAnimation(SpriteSheetGirlWalkingForward);

        SpriteSheetGirlWalkingBackward = loadSpriteSheet("Assets/Spritesheets/Walk_2_Resize_reverse.png", 115, 166, 50);
        girlAnimationWalkingBackward = loadAnimation(SpriteSheetGirlWalkingBackward);

        SpriteSheetGirlPushingForward = loadSpriteSheet("Assets/Spritesheets/Push_Resize_FW.png", 129, 166, 50);
        girlAnimationPushingForward = loadAnimation(SpriteSheetGirlPushingForward);

        SpriteSheetGirlPushingBackward = loadSpriteSheet("Assets/Spritesheets/Push_Resize_BW.png", 129, 166, 50);
        girlAnimationPushingBackward = loadAnimation(SpriteSheetGirlPushingBackward);

        SpriteSheetGirlBreakingIceForward = loadSpriteSheet("Assets/Spritesheets/Ice_Resize_FW.png", 115, 166, 50);
        girlAnimationBreakingIceForward = loadAnimation(SpriteSheetGirlBreakingIceForward);

        SpriteSheetGirlBreakingIceBackward = loadSpriteSheet("Assets/Spritesheets/Ice_Resize _BW.png", 115, 166, 50);
        girlAnimationBreakingIceBackward = loadAnimation(SpriteSheetGirlBreakingIceBackward);

        SpriteSheetGirlThrowingForward = loadSpriteSheet("Assets/Spritesheets/Throw_Resize_FW.png", 115, 166, 25);
        girlAnimationThrowingForward = loadAnimation(SpriteSheetGirlThrowingForward);

        SpriteSheetGirlThrowingBackward = loadSpriteSheet("Assets/Spritesheets/Throw_Resize_BW.png", 115, 166, 25);
        girlAnimationThrowingBackward = loadAnimation(SpriteSheetGirlThrowingBackward);

    }

    draw() {

        //JUMPING--------------------------->>>
        this.velocity += this.gravity;
        this.y += this.velocity;
        /*   girlY = this.originalY; */
        if (this.y > this.originalY) {
            this.y = this.originalY;

            this.jumpCount = 0;
            jumpState = "no";
        }

        /*         positionColliderX = girlCollider.position.x;
                girlCollider.position.y = this.y;
                girlCollider.position.x = canvasWidth / 2;
                girlCollider.debug = true; */


        //BREAKING INTO THE ICE--------------------------->>>
        if (x < -3670 && x > -4200 && this.y === 750) {
            icebreak = "yes";
            if (girlAnimationBreakingIceForward.getFrame() === 49) {
                gameMode = 5;
            } else if (girlAnimationBreakingIceBackward.getFrame() === 49) {
                gameMode = 5;
            }
        }

        //IDLE ANIMATIONS GIRL--------------------------->>>
        if (jumpState === "no" && direction === "forward" && throwState === "true") {
            animation(girlAnimationThrowingForward, canvasWidth / 2, this.y)
        } else if (jumpState === "no" && direction === "backward" && throwState === "true") {
            animation(girlAnimationThrowingBackward, canvasWidth / 2, this.y)
        } else if (jumpState === "no" && direction === "forward" && icebreak === "yes") {
            /*  girlAnimationBreakingIceForward.rewind(); */
            animation(girlAnimationBreakingIceForward, canvasWidth / 2, this.y)
            girlAnimationBreakingIceForward.looping = false;
        } else if (jumpState === "no" && direction === "backward" && icebreak === "yes") {
            /*       girlAnimationBreakingIceBackward.rewind(); */
            animation(girlAnimationBreakingIceBackward, canvasWidth / 2, this.y);
            girlAnimationBreakingIceBackward.looping = false;
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
            push();
            if (gameMode === 3) {
                tint(255, 20, 0, 150)
            };
            animation(girlAnimationStandingForward, canvasWidth / 2, this.y);
            pop();
        } else if (direction === "backward") {
            push();
            if (gameMode === 3) {
                tint(255, 20, 0, 150)
            };
            animation(girlAnimationStandingBackward, canvasWidth / 2, this.y);
            pop();
        }
    }

    jump() {
        if (this.jumpCount < 1) {
            this.velocity = -12;
            this.jumpCount++;
            jumpState = "yes";
        }
    }

    throwingBall() {

        if (snowballAppearance === "true" && this.snowballs.length) {

            for (let i = 0; i < this.snowballs.length; i++) {
                this.snowballs[i].draw();
                if (keyIsDown(83)) {
                    snowVelocity -= 1
                }
            }


            snowVelocity += snowGravity;
            snowball_Y += snowVelocity;

            if (snowball_Y > 600 && snowball_Y < 690 && (x - snowball_X) < -7000 && (x - snowball_X) > -7090) {
                trenchOpen = "true";
                hitTarget = "true";
                targetAnimation.rewind();
                snowGravity = 30;
                hitArr.push(1);
            }

            if (snowball_Y > canvasHeight - 100) {
                snowballAppearance = "false"; // state of showing the ball
                this.snowballs = []
                snowball_X = canvasWidth / 2 + 10;
            }
            snowball_X += snowBallDirection

        }
        if (keyIsDown(83) && fallDown < 1) {
            snowVelocity = -10;
            fallDown = 1;
        }




    }

}


function keyPressed() {
    //----JUMPING
    if (keyCode === 32) {
        girl.jump()
    }

    //----PUSHING
    else if (keyCode === 87) {
        pushState = "push";
        movingSpeed = 0.5;
    }

    //------PUSHRELEASE
    if (keyCode !== 87) {
        pushState = "no";
        movingSpeed = 1.5;
    }

    //-----SHOOTING EVENT







    if (shootingCount === 0) {
        //----SETTING SHOOTING DIRECTIION
        if (direction === "forward") {
            snowBallDirection = 30;
        } else snowBallDirection = -30;

        //------SHOOTING RELEASE
        if (keyCode === 83) {

            snowVelocity = 0
            setTimeout(() => {
                girl.snowballs.push(snowball);
                snowballAppearance = "true";
                setTimeout(() => {
                    throwState = "false"
                    girlAnimationThrowingForward.rewind()
                    girlAnimationThrowingBackward.rewind()
                }, 300)
            }, 500)

            throwState = "true";

            snowball_Y = girl.originalY - 50;

            snowball_X = canvasWidth / 2 + 10;
            snowVelocity = 0;
            fallDown = 0;

            let i = 0;
            shootingCount = 1;

            //----SHOOTING RESET INTERVAL
            setTimeout(() => {
                i++
                if (i >= 1) {
                    snowVelocity = 0;
                    fallDown = 0;
                    shootingCount = 0;
                    snowGravity = 1.2;
                }
            }, 1150);
        }
    }
}

function keyReleased() {
    if (keyCode !== 87) {
        pushState = "no";
        movingSpeed = 1.5;
    }
}