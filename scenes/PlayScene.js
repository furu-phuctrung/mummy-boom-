import Map from '../objects/platforms/Map.js'
import Player from '../objects/characters/Player.js';
import ZombieGenerator from '../objects/characters/Zombie.js';
import Star from '../objects/platforms/Star.js'
import config from '../config.js';

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
        this.zombies = new ZombieGenerator(this,config.key.zombie);
        this.textScore = this.add.text(20,20,`Score: ${this.score}`);
        this.star = new Star(this,config.key.star);
        this.star.createRandomStar();
        this.zombies.createRandomZombie();

        
        this.physics.add.collider(this.player,this.map);
        this.physics.add.collider(this.player,this.zombies,(p,z)=>{
            this.scene.start('endScene',{score:this.score});
        });
        this.physics.add.collider(this.zombies,this.map,(zombies,map)=>{
            zombies.changeVelocity();
        });
        this.physics.add.collider(this.star,this.player,(player,star)=>{
            star.destroy();
            this.score++;
            this.textScore.setText(`Score: ${this.score}`);
        });         
    }

    update() {
        this.player.move();
        this.zombies.getChildren().forEach(z=>{
            z.findPlayer()
        });
    }
} 