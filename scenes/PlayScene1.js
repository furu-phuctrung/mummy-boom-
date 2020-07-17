import Map from '../objects/platforms/Map.js'
import {Matrix} from '../objects/platforms/Map.js'

import ZombieGenerator from '../objects/characters/Zombie.js';
import Star from '../objects/platforms/Star.js'
import config from '../config.js';
import Player from '../objects/characters/Player.js';

/**
 * Set up game objects
 * 
 */

export default class PlayScene1 extends Phaser.Scene {
    constructor(){
        super('playScene1');
    }

    init(){
        this.score = 0;
    }
    create() {
        
        this.map = new Map(this,config.key.ground,config.key.background);
        this.player = new Player(this,725,75,config.key.player);
        this.zombies = new ZombieGenerator(this,config.key.zombie);
        this.textScore = this.add.text(20,20,`Score: ${this.score}`);
        this.star = new Star(this,config.key.star);
        this.star.createStar(50,50);
        this.zombies.createZombie(50,50);

        
        this.physics.add.collider(this.player,this.zombies,(p,z)=>{
            this.scene.start('endScene',{score:this.score});
        });
        this.physics.add.collider(this.star,this.player,(player,star)=>{
            star.destroy();
            this.addNewZombieAndStar();
            this.score++;
            this.textScore.setText(`Score: ${this.score}`);
        });         
    }

    addNewZombieAndStar(){
        let x = 0, y = 0;
        while(Matrix[y][x] == 1){
            x = Math.floor(Math.random() * Matrix[y].length);
            y = Math.floor(Math.random() * Matrix.length);
        }
        this.star.createStar(x*50,y*50);
        this.zombies.createZombie(x*50,y*50);
    }

    update() {
        this.player.move();
    }
} 