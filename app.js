import './node_modules/phaser/dist/phaser.js'
import Map from './game-object/platforms/map.js'
import Player from './game-object/characters/player.js';

/**
 * Set up game objects
 * 
 */
let gameObjects = {
    map: new Map(),
    player: new Player()
};


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
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
let game = new Phaser.Game(config);

function preload ()
{
    for (var gameObject in gameObjects){
        gameObjects[gameObject].scene = this;
        gameObjects[gameObject].preload();
    }
}


function create ()
{
    for (var gameObject in gameObjects){
        gameObjects[gameObject].render();
    }
}

function update ()
{
}
