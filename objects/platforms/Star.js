import config from '../../config.js';
export default class Star extends Phaser.Physics.Arcade.Group{
    constructor(scene, texture){
        super(scene.physics.world, scene);
        this.texture = texture;
    }
    createStar(x,y){
        this.create(x+25,y+25,this.texture);
    }

}