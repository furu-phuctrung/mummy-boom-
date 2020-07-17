import config from '../config.js';
export default class LoadScene extends Phaser.Scene {
    preload() {
        this.load.image(config.key.background,config.dir.assets+'map/background.png');
        this.load.image(config.key.screen.load,config.dir.assets+'map/load-screen.png');
        this.load.image(config.key.ground,config.dir.assets+'map/ground.png');
        this.load.image(config.key.star,config.dir.assets+'map/star.png');
        this.load.spritesheet(config.key.player, config.dir.assets+'sprite/player.png', { frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet(config.key.zombie, config.dir.assets+'sprite/zombie.png', { frameWidth: 40, frameHeight: 40 });
        
    }
    create(){
        this.background = this.add.image(0,0,config.key.screen.load);
        this.background.setOrigin(0,0);
        this.input.keyboard.on('keydown-' + 'ONE', (event)=>{
            this.scene.start('playScene1');
        });
        this.input.keyboard.on('keydown-' + 'TWO', (event)=>{
            this.scene.start('playScene2');
        });
        this.input.keyboard.on('keydown-' + 'THREE', (event)=>{
            this.scene.start('playScene3');
        });
        this.input.keyboard.on('keydown-' + 'FOUR', (event)=>{
            this.scene.start('playScene4');
        });
    }
}