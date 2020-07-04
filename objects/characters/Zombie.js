import ZombieAI from '../../utilities/ZombieAI.js'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.anims.create({
            key: `${texture}-left`,
            frames: scene.anims.generateFrameNumbers(texture, { start: 1, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: `${texture}-turn`,
            frames: [{ key: texture, frame: 0 }],
            frameRate: 20
        });

        scene.anims.create({
            key: `${texture}-right`,
            frames: scene.anims.generateFrameNumbers(texture, { start: 10, end: 17 }),
            frameRate: 10,
            repeat: -1
        });

        this.right = true;
        this.signVelocityX = false;
        this.signVelocityY = false;
        this.setOrigin(0, 0);
        this.setCollideWorldBounds(true);
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.velocity = 100;
        this.collideGround = {
            left: false,
            right: false,
            up: false,
            down: false
        };
        this.ai = new ZombieAI();
    }

    changeVelocity() {
        this.collideGround.left = this.body.touching.left;
        this.collideGround.right = this.body.touching.right;
        this.collideGround.up = this.body.touching.up;
        this.collideGround.down = this.body.touching.down;
    }
    findPlayer() {
        let addPosY =this.signVelocityY ? 0 : 0;
        let addPosX = this.signVelocityX ? 0 : 0;
        let currentPos = {
            x: Math.round((this.x+addPosX)/50),
            y: Math.round((this.y+addPosY)/50)
        };
        let playerPos = {
            x: Math.round(this.scene.player.x/50),
            y: Math.round(this.scene.player.y/50)
        }
        this.directions = this.ai.getDirection(currentPos,playerPos);
        this.move();
        this.goToStartPoint(currentPos);
    }
    move(){
        let addPosY =this.signVelocityY ? 40 : 0;
        let addPosX = this.signVelocityX ? 40 : 0;
        if(this.directions[`${Math.floor((this.x+addPosX)/50)}-${Math.floor((this.y+addPosY)/50)}`]){
            let direction = this.directions[`${Math.floor((this.x+addPosX)/50)}-${Math.floor((this.y+addPosY)/50)}`];
            this.setDirection(direction);
        }
    }
    setDirection(dir){
        this.movingX = true;
        this.movingY = true;
        if(dir == 'right'){
            this.right = true;
            this.signVelocityX = false;
            this.trackLeftOrRight();
            this.setVelocityX(this.velocity);
        }else if(dir == 'left'){    
            this.right = false;
            this.signVelocityX = true;
            this.trackLeftOrRight();
            this.setVelocityX(-this.velocity);
        }else{
            this.movingX = false;
            this.signVelocityX = false;
            this.setVelocityX(0);
        }

        if(dir == 'up'){
            this.signVelocityY = true;
            this.trackLeftOrRight();
            this.setVelocityY(-this.velocity);
        }else if(dir == 'down'){
            this.signVelocityY = false;
            this.trackLeftOrRight();
            this.setVelocityY(this.velocity);
        }else{
            this.movingY = false;
            this.signVelocityY = false;
            this.setVelocityY(0);
        }

        if(!(this.movingX || this.movingY)){
            this.anims.play(`${this.texture.key}-turn`,true);
        }
    }
    trackLeftOrRight(){
        if(this.right){
            this.anims.play(`${this.texture.key}-right`,true);
        }else{
            this.anims.play(`${this.texture.key}-left`,true);
        }
    }
    goToStartPoint(startPoint){
        if(this.body.touching.left || this.body.touching.right){
            if(this.y > startPoint.y){
                this.setVelocityY(-this.velocity);
            }else if(this.y < startPoint.y){
                this.setVelocityY(this.velocity);
            }
        }
        if(this.body.touching.up || this.body.touching.down){
            if(this.x > startPoint.x){
                this.setVelocityX(-this.velocity);
            }else if(this.x < startPoint.x){
                this.setVelocityX(this.velocity);
            }
        }
    }
}