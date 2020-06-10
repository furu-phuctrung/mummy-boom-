export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture)
        this.setOrigin(0,0);
        scene.physics.add.existing(this);
    }
}