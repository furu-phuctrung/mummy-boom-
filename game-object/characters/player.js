export default class Player{
    preload(){
        this.scene.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        
    }
    render(){
        this.model = this.scene.physics.add.sprite(100, 450, 'dude');
    
        // this.model.setBounce(0.5);
        // this.model.setCollideWorldBounds(true);
        // this.model.body.setGravityY(0);
        
        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'up',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }
    update(){
        let cursors = this.scene.input.keyboard.createCursorKeys();
        this.move(cursors);
    }
    move(cursors){
        if (cursors.left.isDown)
        {
            this.moveLeft();
        }
        else if (cursors.right.isDown)
        {
            this.moveRight();
        }
        else if (cursors.up.isDown)
        {
            this.moveUp();
        }
        else if (cursors.down.isDown)
        {
            this.moveDown();
        }
        else
        {
            this.turn();
        }

        
    }
    moveLeft(){
        this.model.setVelocityX(-160);

        this.model.anims.play('left', true);
    }
    moveRight(){
        this.model.setVelocityX(160);

        this.model.anims.play('right', true);
    }
    turn(){
        this.model.setVelocityX(0);
        this.model.setVelocityY(0);
        this.model.anims.play('turn', true);
    }
    moveUp(){
        this.model.setVelocityY(-160);
        this.model.anims.play('up', true);
    }
    moveDown(){
        this.model.setVelocityY(160);
        this.model.anims.play('up', true);
    }
}