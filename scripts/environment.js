let BGImageLast;
let BGImageSecondLast;
let ImgMiddleGround;
let snowflakes = [];

class BackgroundLast {
    draw() {
        image(BGImageLast, x * 0.5, 0, 10000, 1000)
        if (keyIsDown(39) && icebreak !== "yes" && hitobstacleFW !== "true") {
            direction = "forward";
            if (x >= -ImgMiddleGround.width + canvasWidth) {
                x -= movingSpeed
            }

        } else if (keyIsDown(37) && icebreak !== "yes" && hitobstacleBW !== "true") {
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
        if (keyIsDown(39) && icebreak !== "yes" && hitobstacleFW !== "true") {
            direction = "forward";
            if (x >= -ImgMiddleGround.width + canvasWidth) {
                x -= movingSpeed
            }

        } else if (keyIsDown(37) && icebreak !== "yes" && hitobstacleBW !== "true") {
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
        if (keyIsDown(39) && icebreak !== "yes" && hitobstacleFW !== "true") {
            direction = "forward";
            if (x >= -ImgMiddleGround.width + canvasWidth) {
                x -= movingSpeed;
                movingState = "moving";
            }

        } else if (keyIsDown(37) && icebreak !== "yes" && hitobstacleBW !== "true") {
            direction = "backward";
            if (x <= -10) {
                x += movingSpeed
                movingState = "moving";
            }

        };
       

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