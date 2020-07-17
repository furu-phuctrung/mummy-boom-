import {Matrix} from '../platforms/map.js'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
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
            frames: [ { key: texture, frame: 0 } ],
            frameRate: 20
        });

        scene.anims.create({
            key: `${texture}-right`,
            frames: scene.anims.generateFrameNumbers(texture, { start: 10, end: 17 }),
            frameRate: 10,
            repeat: -1
        });

        this.right = true;
        this.setCollideWorldBounds(true);
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.moveTo = this.scene.plugins.get('rexMoveTo').add(this, {
            speed: 400
        });
        this.isTurning = true;
        this.moveTo.on('complete',(gameObject, moveTo)=>{
            gameObject.anims.play(`${gameObject.texture.key}-turn`,true);
            this.scene.zombies.findPlayer();
        });
    }

    move(){
        if(this.isTurning){
            if(this.cursor.right.isDown){
                this.right = true;
                this.directTo(this.x+50, this.y);
            }else if(this.cursor.left.isDown){
                this.right = false;
                this.directTo(this.x-50, this.y);
            }else if(this.cursor.up.isDown){
                this.directTo(this.x, this.y-50);
            }else if(this.cursor.down.isDown){
                this.directTo(this.x, this.y+50);
            }
        }    
    }
    directTo(x,y){
        if(Matrix[Math.floor(y/50)][Math.floor(x/50)] != 1){
            this.isTurning = false;
            this.trackLeftOrRight();
            this.moveTo.moveTo(x, y);
        }
    }
    trackLeftOrRight(){
        if(this.right){
            this.anims.play(`${this.texture.key}-right`,true);
        }else{
            this.anims.play(`${this.texture.key}-left`,true);
        }
    }
}