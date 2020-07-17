import 'phaser/dist/phaser';
import MoveToPlugin from 'phaser3-rex-plugins/plugins/moveto-plugin';
import PlayScene1 from './scenes/playscene1.js';
import PlayScene2 from './scenes/playscene2.js';
import PlayScene3 from './scenes/playscene3.js';
import PlayScene4 from './scenes/playscene4.js';
import LoadScene from './scenes/loadscene.js';
import EndScene from './scenes/endscene.js';

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
            debug:false,
        }
    },
    plugins: {
        global: [{
            key: 'rexMoveTo',
            plugin: MoveToPlugin,
            start: true
        },
        ]
    },
    scene: [LoadScene,PlayScene1,PlayScene2,PlayScene3,PlayScene4,EndScene]
};
let game = new Phaser.Game(config);
