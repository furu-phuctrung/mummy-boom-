import Map from '../objects/platforms/Map.js'
import Player from '../objects/characters/Player.js';

/**
 * Set up game objects
 * 
 */

export default class PlayScene extends Phaser.Scene {

    config = {
        key:{
            background:'background',
            ground:'ground',
            player:'player'
        },
        dir:{
            assets:'../assets/',
        }
    }

    preload() {
        this.load.image(this.config.key.background,this.config.dir.assets+'map/background.png');
        this.load.image(this.config.key.ground,this.config.dir.assets+'map/ground.png');

        this.load.spritesheet(this.config.key.player, this.config.dir.assets+'dude.png', { frameWidth: 32, frameHeight: 48 });
    }


    create() {
        this.map = new Map(this,this.config.key.ground,this.config.key.background);
        this.player = new Player(this,50,0,this.config.key.player);
        this.physics.add.collider(this.player,this.map);
    }

    update() {
        this.player.move();
    }
} 