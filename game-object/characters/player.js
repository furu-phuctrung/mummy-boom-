export default class Player{
    preload(){
        this.scene.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        
    }
    render(){
        this.player = this.scene.physics.add.sprite(100, 450, 'dude');
        
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        
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
    }
}