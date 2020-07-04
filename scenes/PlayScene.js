import Map from '../objects/platforms/Map.js'
import Player from '../objects/characters/Player.js';
import Zombie from '../objects/characters/Zombie.js';

/**
 * Set up game objects
 * 
 */

export default class PlayScene extends Phaser.Scene {

    config = {
        key:{
            background:'background',
            ground:'ground',
            player:'player',
            zombie:'zombie'
        },
        dir:{
            assets:'../assets/',
        }
    }
    constructor(){
        super('playScene');
    }

    init(){
        this.score = 100;
    }
    create() {
        this.map = new Map(this,this.config.key.ground,this.config.key.background);
        this.player = new Player(this,700,50,this.config.key.player);
        this.zombie = new Zombie(this,50,50,this.config.key.zombie);
        this.add.text(20,20,`Score: ${this.score}`);
        this.physics.add.collider(this.player,this.map);
        this.physics.add.collider(this.player,this.zombie,(p,z)=>{
        });
        this.physics.add.collider(this.zombie,this.map,(zombie,map)=>{
            zombie.changeVelocity();
            this.scene.start('endScene',{score:this.score});
        });
        
         
    }

    update() {
        this.player.move();
        this.zombie.findPlayer();
    }
} 