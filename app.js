import './node_modules/phaser/dist/phaser.js';
import MoveToPlugin from './node_modules/phaser3-rex-plugins/plugins/moveto-plugin.js';
import PlayScene1 from './scenes/PlayScene1.js';
import PlayScene2 from './scenes/PlayScene2.js';
import PlayScene3 from './scenes/PlayScene3.js';
import PlayScene4 from './scenes/PlayScene4.js';
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
