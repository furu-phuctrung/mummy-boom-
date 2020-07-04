import Map from '../objects/platforms/Map.js'
import Player from '../objects/characters/Player.js';
import Zombie from '../objects/characters/Zombie.js';
import Star from '../objects/platforms/Star.js'
import config from './config.js';

/**
 * Set up game objects
 * 
 */

export default class PlayScene extends Phaser.Scene {
    constructor(){
        super('playScene');
    }

    init(){
        this.score = 0;
    }
    create() {
        this.map = new Map(this,config.key.ground,config.key.background);
        this.player = new Player(this,700,50,config.key.player);
        this.zombie = new Zombie(this,50,50,config.key.zombie);
        this.star = new Star(this,65,65,config.key.star);
        this.textScore = this.add.text(20,20,`Score: ${this.score}`);
        this.physics.add.collider(this.player,this.map);
        this.physics.add.collider(this.player,this.zombie,(p,z)=>{
            this.scene.start('endScene',{score:this.score});
        });
        this.physics.add.collider(this.zombie,this.map,(zombie,map)=>{
            zombie.changeVelocity();
        });
        this.physics.add.collider(this.star,this.player,(star,player)=>{
            star.destroy();
            this.score++;
            this.textScore.setText(`Score: ${this.score}`);
        });         
    }

    update() {
        this.player.move();
        this.zombie.findPlayer();
    }
} 