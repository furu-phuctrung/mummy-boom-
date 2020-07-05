import config from '../../config.js';
export default class Star extends Phaser.Physics.Arcade.Group{
    constructor(scene, texture){
        super(scene.physics.world, scene);
        this.x = 65;
        this.y = 65;
        this.texture = texture;
    }
    createRandomStar(){
        let newStar = this.create(this.x,this.y,this.texture);
        newStar.setOrigin(0,0);
    }

}