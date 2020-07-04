export default class Star extends Phaser.Physics.Arcade.Image{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture );
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setOrigin(0,0);
    }
}