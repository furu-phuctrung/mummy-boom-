import './node_modules/phaser/dist/phaser.js'
import PlayScene from './scenes/PlayScene.js';
import LoadScene from './scenes/LoadScene.js';
import EndScene from './scenes/EndScene.js';


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
            gravity: { y: 0 },
            debug:true,
        }
    },
    scene: [LoadScene,PlayScene,EndScene]
};
let game = new Phaser.Game(config);
