import './node_modules/phaser/dist/phaser.js'
import PlayScene from './scenes/PlayScene.js';

/**
 * Config game window
 * 
 */
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 0 }
        }
    },
    scene: [PlayScene]
};
let game = new Phaser.Game(config);
