let obstacleImage1;
let obstacleImage2;
let obstacleImage3

let obstacle1Sprite;
let obstacle2Sprite;
let obstacle3Sprite;
let obstacle4Sprite;

let obstacleTreeImg;
let treeSprite;

/* !!!! */
/* let LeftborderTree = 2000; */


let o1BorderLeft = -920;
let o1BorderRight = -1100;
let o1BorderHeight = 650;

let o2BorderLeft = -1170;
let o2BorderRight = -1360;
let o2JumpHeight = 500;

let o3BorderLeft = -1450;
let o3BorderRight = -1600;
let o3JumpHeight = 400;

let o4BorderLeft = -1780;
let o4BorderRight = -1870;
let o4JumpHeight = 670;

let o5BorderTreeLeft = -LeftborderTree - 50;
let o5BorderTreeRight = -LeftborderTree - 520;
let o5JumpHeight = 700;







class Obstacle1 {
    setup() {
        //         obstacleImage1 = loadImage("/Assets/Obstacles_09.png");

        //         obstacle1Sprite = createSprite(1790, 750, 200, 200);
        //         /*      obstacle1Sprite.addImage(obstacleImage1); */
        //         obstacle1Sprite.setCollider("rectangle", 0, 0, 200, 200);
        //         /*       obstacle1Sprite.setCollider("rectangle", 0, 750, 100, 100); */
        // /*         obstacle2Sprite = createSprite(1890, 750, 50, 50);
        //         obstacle2Sprite.setCollider("rectangle", 1890, 750, 100, 100); */
        //         obstacle1Sprite.debug = true;
    }

    draw() {
        //     /*  image(obstacleImage1, 1690 + x, 610, 200, 300); */
        //     obstacle1Sprite.position.x = 1790 + x;
        //  /*    obstacle1Sprite.displace(girlCollider) */
        if (girl.y <= o1BorderHeight && x <= o1BorderLeft && x >= o1BorderRight) {
            girl.originalY = 570;
        } else if (girl.y <= 650 && x <= -1130 && x >= -1200) {
            girl.originalY = 570;
        } else if (girl.y <= o2JumpHeight && x <= o2BorderLeft && x >= o2BorderRight) {
            girl.originalY = 480;
        } else if (girl.y <= o3JumpHeight && x <= o3BorderLeft && x >= o3BorderRight) {
            girl.originalY = 370;
        } else if (girl.y <= o4JumpHeight && x <= o4BorderLeft && x >= o4BorderRight) {
            girl.originalY = 600;
            saveZone = "active"
        } else if (girl.y <= o5JumpHeight && x <= -LeftborderTree - 50 && x >= -LeftborderTree - 520 && treeYPosition === 800) {
            girl.originalY = 710;
        } else if (girl.y < o5JumpHeight && x <= -LeftborderTree - 50 && x >= -LeftborderTree - 520) {
            girl.originalY = 650;
        } else if (x <= o1BorderLeft && x >= o1BorderRight && direction === "forward" || x <= o2BorderLeft && x >= o2BorderRight && direction === "forward" || x <= o3BorderLeft && x >= o3BorderRight && direction === "forward" || x <= o4BorderLeft && x >= o4BorderRight && direction === "forward" /* || x < o5BorderTreeLeft && x > o5BorderTreeRight && direction === "forward" */ ) {
            hitobstacleFW = "true"
        } else if (x <= o1BorderLeft && x >= o1BorderRight && direction === "backward" || x <= o2BorderLeft && x >= o2BorderRight && direction === "backward" || x <= o3BorderLeft && x >= o3BorderRight && direction === "backward" || x <= o4BorderLeft && x >= o4BorderRight && direction === "backward" /* || x < o5BorderTreeLeft && x > o5BorderTreeRight && direction === "backward" */ ) {
            hitobstacleBW = "true"
        } else {
            hitobstacleFW = "false";
            hitobstacleBW = "false";
        }

        if (x > o1BorderLeft || x < o1BorderRight && x > -1120 || x < o2BorderRight && x > o3BorderLeft || x < o3BorderRight && x > o4BorderLeft || x < o4BorderRight && x > -LeftborderTree - 50 || x < -LeftborderTree - 520) {
            girl.originalY = 750;
        }


        //Dying from Jumping
        if (x < o2BorderRight && x > o3BorderLeft && girl.y === 750) {
            gameMode = 3;
        } else if (x < o3BorderRight && girl.y === 750 && saveZone === "deactivated") {
            gameMode = 3;
        }


    }

}

class ObstacleTree {

    setup() {
        obstacleTreeImg = loadImage("/Assets/Tree_11.png");

        treeSprite = createSprite(treeXPosition, treeYPosition, 512, 163);
        treeSprite.addImage(obstacleTreeImg)
    }

    draw() {


        let RightborderTree = LeftborderTree + 540;

        treeSprite.position.x = LeftborderTree + 1100 + x;
        treeSprite.position.y = treeYPosition;



        if (x <= -LeftborderTree && x >= -RightborderTree) {
            if (pushState === "push" && movingState === "moving" && direction === "forward") {
                LeftborderTree += movingSpeed + 1;

            } else if (pushState === "push" && movingState === "moving" && direction === "backward") {
                if (LeftborderTree >= 1860) {
                    LeftborderTree -= movingSpeed + 1;
                    /*   console.log(x); */
                }

            }
        }

        if (LeftborderTree + 100 >= 3600) {
            treeSprite.position.y = 800
            treeYPosition = 800;
            icebreakTree = "true";
        }
        console.log("treeSprite.position.x", treeSprite.position.x)
        console.log("LeftborderTree", LeftborderTree)
        /*      if (girl.y < 700 && x <= -LeftborderTree && x >= -RightborderTree) {
                 girl.originalY = 650;
             } */

    }
}