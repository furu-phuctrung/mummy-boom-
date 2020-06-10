import Map from '../objects/platforms/Map.js'
import Player from '../objects/characters/player.js';

/**
 * Set up game objects
 * 
 */

export default class PlayScene extends Phaser.Scene {

    preload() {
        this.load.image('background','../assets/map/background.png');
        this.load.image('ground','../assets/map/ground.png');
    }


    create() {
        this.map = new Map(this,'ground','background');
    }

    update() {
        
    }
} 