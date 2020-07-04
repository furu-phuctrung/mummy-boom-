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
        this.setOrigin(0,0);
        this.setCollideWorldBounds(true);
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.velocity = 100;
    }

    move(){
        this.movingX = true;
        this.movingY = true;
        if(this.cursor.right.isDown){
            this.right = true;
            this.trackLeftOrRight();
            this.setVelocityX(this.velocity);
        }else if(this.cursor.left.isDown){
            this.right = false;
            this.trackLeftOrRight();
            this.setVelocityX(-this.velocity);
        }else{
            this.movingX = false;
            this.setVelocityX(0);
        }

        if(this.cursor.up.isDown){
            this.trackLeftOrRight();
            this.setVelocityY(-this.velocity);
        }else if(this.cursor.down.isDown){
            this.trackLeftOrRight();
            this.setVelocityY(this.velocity);
        }else{
            this.movingY = false;
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
}