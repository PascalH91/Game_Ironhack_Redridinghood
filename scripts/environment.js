let BGImageLast;
let BGImageSecondLast;
let ImgMiddleGround;
let ImgLakeSolo;
let ImgFenceFront;
let ImgFog;
let ImgForeground;



let snowflakes = [];

let fenceDoorClosedSpritesheet;
let fenceDoorClosedAnimation;
let fenceDoorOpeningSpritesheet;
let fenceDoorOpeningAnimation;
let fenceDoorOpenSpritesheet;
let fenceDoorOpenAnimation;


let houseSpritesheet;
let houseAnimation;
let houseDoorClosedSpritesheet;
let houseDoorAnimationclosed;
let houseDoorOpeningSpritesheet;
let houseDoorOpeningAnimation;

let targetSpritesheet;
let targetAnimation;
let targetAnimationStill;

let o6BorderFenceLeft = -6670;

let hitArr = [];



class BackgroundLast {
    draw() {
        image(BGImageLast, x * 0.5, 0, 10000, 1000)
        if (keyIsDown(39) && icebreak !== "yes" && hitobstacleFW !== "true" && gameMode === 1) {
            direction = "forward";
            if (x >= -ImgMiddleGround.width + canvasWidth) {
                x -= movingSpeed
            }

        } else if (keyIsDown(37) && icebreak !== "yes" && hitobstacleBW !== "true" && gameMode === 1) {
            direction = "backward";
            if (x <= -10) {
                x += movingSpeed
            }

        };
    }
}
class BackgroundSecondLast {
    draw() {
        image(BGImageSecondLast, x * 0.7, 0, 10000, 1000)
        if (keyIsDown(39) && icebreak !== "yes" && hitobstacleFW !== "true" && gameMode === 1) {
            direction = "forward";
            if (x >= -ImgMiddleGround.width + canvasWidth) {
                x -= movingSpeed
            }

        } else if (keyIsDown(37) && icebreak !== "yes" && hitobstacleBW !== "true" && gameMode === 1) {
            direction = "backward";
            if (x <= -10) {
                x += movingSpeed
            }

        };
    }
}

class MiddleGround {
    draw() {
        image(ImgMiddleGround, x, 0, 10000, 1000)
        if (keyIsDown(39) && icebreak !== "yes" && hitobstacleFW !== "true" && gameMode === 1) {
            direction = "forward";
            if (x >= -ImgMiddleGround.width + canvasWidth) {
                x -= movingSpeed
                movingState = "moving";
            }

        } else if (keyIsDown(37) && icebreak !== "yes" && hitobstacleBW !== "true" && gameMode === 1) {
            direction = "backward";
            if (x <= -10) {
                x += movingSpeed
                movingState = "moving";
            }

        };


    }
}

class Fog {
    draw() {
        image(ImgFog, x * 1.3, 0, 14000, 1000)
    }
}

class ForGround {
    draw() {
        image(ImgForeground, x * 1.6, 0, 15000, 1000)
    }
}



class LakeSolo {
    draw() {
        let lakePos = x;


        if (icebreakTree === "true") {
            image(ImgLakeSolo, lakePos, 0, 10000, 1000)

        }
    }
}


class FenceDoor {
    setup() {
        fenceDoorClosedSpritesheet = loadSpriteSheet("/Assets/Spritesheets/PFOR_500_1000_CLOSED.png", 500, 1000, 50);
        fenceDoorClosedAnimation = loadAnimation(fenceDoorClosedSpritesheet);
        fenceDoorOpeningSpritesheet = loadSpriteSheet("/Assets/Spritesheets/PFOR_500_1000_OPENING.png", 500, 1000, 50);
        fenceDoorOpeningAnimation = loadAnimation(fenceDoorOpeningSpritesheet);
        fenceDoorOpenSpritesheet = loadSpriteSheet("/Assets/Spritesheets/PFOR_500_1000_OPENALWAYS.png", 500, 1000, 50);
        fenceDoorOpenAnimation = loadAnimation(fenceDoorOpenSpritesheet);
    }

    draw() {
        if (trenchOpen === "false") {
            animation(fenceDoorClosedAnimation, 7605 + x, 500)
        }

        if (hitTarget === "true") {
            animation(fenceDoorOpeningAnimation, 7605 + x, 500)
            fenceDoorOpeningAnimation.looping = false
        }

        if (x < o6BorderFenceLeft && trenchOpen === "false") {
            hitobstacleFW = "true"
        }
        if (x < o6BorderFenceLeft - 200) {
            hitTarget = "true"
        }
    }
}


class FenceFront {
    draw() {
        image(ImgFenceFront, x, 0, 10000, 1000)
    }
}

class House {
    setup() {
        houseSpritesheet = loadSpriteSheet("/Assets/Spritesheets/Haus__1500_1000_noDoor.png", 1500, 1000, 75);
        houseAnimation = loadAnimation(houseSpritesheet);
    }

    draw() {
        animation(houseAnimation, 9100 + x, 500)
    }
}

class HouseDoor {
    setup() {
        houseDoorClosedSpritesheet = loadSpriteSheet("/Assets/Spritesheets/Haus__1500_1000_closedDoor.png", 1500, 1000, 50);
        houseDoorAnimationclosed = loadAnimation(houseDoorClosedSpritesheet);
        houseDoorOpeningSpritesheet = loadSpriteSheet("/Assets/Spritesheets/Haus__1500_1000_openingDoor.png", 1500, 1000, 25);
        houseDoorOpeningAnimation = loadAnimation(houseDoorOpeningSpritesheet);
    }

    draw() {
        if (x > -7600) {
            animation(houseDoorAnimationclosed, 9100 + x, 500)
            houseDoorOpeningAnimation.rewind()
        }

        if (x <= -7600) {

            animation(houseDoorOpeningAnimation, 9100 + x, 500)
            houseDoorOpeningAnimation.looping = false
        }

        if (x <= -8150) {


            enteredHouse = "true";
            gameMode = 4;
            hitobstacleFW = "true";
        }
    }
}

class Target {
    setup() {
        targetSpritesheet = loadSpriteSheet("/Assets/Spritesheets/target_Sprite_200_1000.png", 200, 1000, 25);
        targetAnimation = loadAnimation(targetSpritesheet);
        targetAnimationStill = loadAnimation(targetSpritesheet);

    }
    draw() {

        if (hitArr.length === 0) {
            animation(targetAnimationStill, 7040 + x, 500);
            targetAnimationStill.goToFrame(0)
        }

        if (hitTarget === "true") {
            animation(targetAnimation, 7040 + x, 500);
            targetAnimation.looping = false
        }
    }
}


class Snow {
    draw() {
        for (let i = 0; i < random(20); i++) {
            snowflakes.push(new snowflake()); // append snowflake object
        }
        for (let flake of snowflakes) {
            if (frameCount % 2 === 0) {

                flake.update(t); // update snowflake position
            }
            flake.display(); // draw snowflake
        }
    }
}





function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(1, 4);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(10000, 2)));

    this.update = function (time) {
        // x position follows a circle
        let w = 0.01; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = canvasWidth + x + this.radius * sin(angle);
        /*   this.posX = 49; */

        // different size snowflakes fall at slightly different y speeds
        this.posY += 1.5 + pow(this.size, 0.5);

        // delete snowflake if past end of screen
        if (this.posY > canvasHeight * 0.9) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function () {
        ellipse(this.posX, this.posY, this.size);
        noStroke();
    };
}